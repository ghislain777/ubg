const fs = require("fs");
const PDFDocument = require("pdfkit-table");
const entreprise = require("./entreprise")
const {Commandefournisseur, Mouvementdecomptefournisseur, Lignecommandefournisseur, Stock, Mouvementdestock, Facturefournisseur, Lignefacturefournisseur} = require("../models")
const commandefournisseurService = {}
const {
  format
} = require("date-fns");
const fonctionsDocument = require("./fonctions_document");
const fonctionsCommandefournisseur = require("./fonctions_commandefournisseur");

// Génération du fichier PDF d'une commandefournisseur
commandefournisseurService.genererCommandefournisseur = (commandefournisseur, res) => {
  let doc = new PDFDocument({
    size: "A4",
    margin: 30
  });

  fonctionsDocument.genererEntete(doc)
  fonctionsDocument.generateHr(doc, 90)
  fonctionsCommandefournisseur.genererInfosFournisseur(doc, commandefournisseur);
  fonctionsCommandefournisseur.genererDetailsCommandefournisseur(doc, commandefournisseur)
  //fonctionsDocument.genererLignes(doc, commandefournisseur)  // generation du tableau des détails de la commandefournisseur
  if(entreprise.afficherTableauModalites == true) {
  //  fonctionsDocument.genererModalitesDePayement(doc, commandefournisseur)
  fonctionsCommandefournisseur.genererModalitesDePayement(doc, commandefournisseur)
  }
  if(entreprise.afficherTableauPayement === true) {
    fonctionsCommandefournisseur.genererPayementsAnterieurs(doc,commandefournisseur)
  }
  fonctionsDocument.genererPiedDePage(doc);
  doc.pipe(res)
  doc.end();
  // doc.pipe(fs.createWriteStream(`public/fichiers/commandefournisseurs/test.pdf`));
}

// Livraison d'une commandefournisseur (destockage de tous les produits de la commandefournisseur)
commandefournisseurService.livrer = async (commandefournisseur) => {
const ligneCommandefournisseurs = await Lignecommandefournisseur.findAll({
    where:{
        commandefournisseur:commandefournisseur.id
    },
    
})

ligneCommandefournisseurs.forEach(async (ligne) => {
await Mouvementdestock.create({
    stock: ligne.stock,
    motif:`Livraison des produits commande fournisseur #: ${commandefournisseur.id}`,
    quantite: ligne.quantite,
    typedemouvement: "entree"
}) 
});
}
// création d'une facture à partir de la commandefournisseur
commandefournisseurService.facturer = async (commandefournisseur) => {
  const ligneCommandefournisseurs = await Lignecommandefournisseur.findAll({
    where:{
        commandefournisseur:commandefournisseur.id
    },
  
})
const facture = await Facturefournisseur.create({
  commandefournisseur: commandefournisseur.id,
  montant:commandefournisseur.montant,
  statut:"Non payée",
  payementcomplet: false,
  resteapayer:commandefournisseur.montant,
  soustotal:commandefournisseur.soustotal,
  taxe:commandefournisseur.taxe,
  etat:"ouvert",
  datefacture:new Date(),
  modedepayement:1,
  fournisseur:commandefournisseur.fournisseur,
  magasin:commandefournisseur.magasin
})

// creation des lignes de facture
ligneCommandefournisseurs.forEach( async ligne => {
  await Lignefacturefournisseur.create({
    stock:ligne.stock,
    quantite:ligne.quantite,
    prixunitaire:ligne.prixunitaire,
    prixtotal:ligne.prixtotal,
    remise:ligne.remise,
    facturefournisseur:facture.id
  })
});

//TODO on crédite le compte du fournisseur à la facturation

await Mouvementdecomptefournisseur.create({
  fournisseur:commandefournisseur.fournisseur,
  montant: commandefournisseur.montant,
  motif:`facturation fournisseur #${commandefournisseur.id}`,
  typedemouvement:"credit"
})

}


module.exports = commandefournisseurService