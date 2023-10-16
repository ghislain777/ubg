const fs = require("fs");
const PDFDocument = require("pdfkit-table");
let entreprise = require("./entreprise")
const {Commande, Lignecommande, Stock, Mouvementdestock, Facture, Lignefacture} = require("../models")
const commandeService = {}
const {
  format
} = require("date-fns");
const fonctionsDocument = require("./fonctions_document");
const fonctionsCommande = require("./fonctions_commande");

// Génération du fichier PDF d'une commande
commandeService.genererCommande = (commande, res) => {
  entreprise.typedeDocument = "Commande"
  entreprise.prefixe = "CM"
  let doc = new PDFDocument({
    size: "A4",
    margin: 30
  });

  fonctionsDocument.genererEntete(doc)
  fonctionsDocument.generateHr(doc, 90)
  fonctionsCommande.genererInfosClient(doc, commande);
  fonctionsCommande.genererDetailsCommande(doc, commande)
  //fonctionsDocument.genererLignes(doc, commande)  // generation du tableau des détails de la commande
  if(entreprise.afficherTableauModalites == true) {
  //  fonctionsDocument.genererModalitesDePayement(doc, commande)
  fonctionsCommande.genererModalitesDePayement(doc, commande)
  }
  if(entreprise.afficherTableauPayement === true) {
    fonctionsCommande.genererPayementsAnterieurs(doc,commande)
  }
  fonctionsDocument.genererPiedDePage(doc);
  doc.pipe(res)
  doc.end();
  // doc.pipe(fs.createWriteStream(`public/fichiers/commandes/test.pdf`));
}

// Livraison d'une commande (destockage de tous les produits de la commande)
commandeService.livrer = async (commande) => {
const ligneCommandes = await Lignecommande.findAll({
    where:{
        commande:commande.id
    },
    
})

ligneCommandes.forEach(async (ligne) => {
await Mouvementdestock.create({
    stock: ligne.stock,
    motif:`Livraison des produits commande # ${commande.id}`,
    quantite: ligne.quantite,
    typemouvement: "sortie"
}) 
});
}
// création d'une facture à partir de la commande
commandeService.facturer = async (commande) => {
  const ligneCommandes = await Lignecommande.findAll({
    where:{
        commande:commande.id
    },
    
})
const facture = await Facture.create({
  commande: commande.id,
  montant:commande.montant,
  statut:"Non payée",
  payementcomplet: false,
  resteapayer:commande.montant,
  soustotal:commande.soustotal,
  taxe:commande.taxe,
  etat:"ouvert",
  datefacture:new Date(),
  modedepayement:1,
  client:commande.client,
  magasin:commande.magasin
})

// creation des lignes de facture
ligneCommandes.forEach( async ligne => {
  await Lignefacture.create({
    stock:ligne.stock,
    quantite:ligne.quantite,
    prixunitaire:ligne.prixunitaire,
    prixtotal:ligne.prixtotal,
    remise:ligne.remise,
    facture:facture.id
  })
});

}


module.exports = commandeService