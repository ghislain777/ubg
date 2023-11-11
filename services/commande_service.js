const fs = require("fs");
const PDFDocument = require("pdfkit-table");
let entreprise = require("./entreprise")
const {Commande, Lignecommande,Produit, Mouvementdecompteclient, Stock, Mouvementdestock, Facture, Lignefacture} = require("../models")
const commandeService = {}
const {
  format
} = require("date-fns");
const fonctionsDocument = require("./fonctions_document");
const fonctionsCommande = require("./fonctions_commande");
const fonctionsBondelivraison = require("./fonctions_bondelivraison");

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

// *****Livraison d'une commande (destockage de tous les produits de la commande)
commandeService.livrer = async (commande) => {
const ligneCommandes = await Lignecommande.findAll({
    where:{
        commande:commande.id
    },
    
})

ligneCommandes.forEach(async (ligne) => {
const lestock = await Stock.findOne({
  where:{
    id: ligne.stock
  },
  include:[
    {model:Produit, inclide:["Origine"]}
  ]
})


var stockADebiter = lestock
var quantiteADebiter = ligne.quantite


if(lestock.Produit.produitdorigine != null) { // le produit est un produit detaché

  stockADebiter = await Stock.findOne(
    {
      where:{
        produit: lestock.Produit.produitdorigine,
        magasin: lestock.magasin

      }
    }
  )
  quantiteADebiter = ligne.quantiteorigine


}

console.log("produit à debiter")
console.log(lestock)

await Mouvementdestock.create({
    stock: stockADebiter.id,
    motif:`Livraison des produits commande # ${commande.id}`,
    quantite: quantiteADebiter,
    typedemouvement: "sortie"
}) 
});
}


// création d'une facture à partir de la commande et debit di compte client....
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

await Mouvementdecompteclient.create({
  client: commande.client,
  montant:commande.montant,
  typedemouvement:"debit",
  motif:`facturation de la commande ${commande.id}`

})

 

}

commandeService.genereBondelivraison = (commande, res) => {

  entreprise.typedeDocument = "Bon de livraison"
  entreprise.prefixe = "BL"
  let doc = new PDFDocument({
    size: "A4",
    margin: 30,
  });

  fonctionsDocument.genererEntete(doc)
  fonctionsDocument.generateHr(doc, 90)
  fonctionsBondelivraison.genererinfosClients(doc, commande);
  fonctionsBondelivraison.genererDetailsBondecommande(doc, commande)
  fonctionsDocument.genererPiedDePage(doc);
  doc.pipe(res)
  doc.end();
  // doc.pipe(fs.createWriteStream(`public/fichiers/commandes/test.pdf`));


}


module.exports = commandeService