
const {Mouvementdestock, Caissemagasin, Mouvementdecaisse,Stock} = require('../models')
const PDFDocument = require("pdfkit-table");
const entreprise = require("./entreprise")
const venteService = {}
const {
  format
} = require("date-fns");
const fonctionsDocument = require("./fonctions_document");
const fonctionsVente = require("./fonctions_vente");


venteService.vendre = async (vente) => {
    const ligneventes = vente.Ligneventes

    ligneventes.forEach(async (ligne) => {
       // console.log("Ligne")
       // commandeController.log(ligne)
// on debite le stock
        if(ligne.Stock.Produit.produitdorigine === null) {
    await Mouvementdestock.create({
        stock: ligne.stock,
        datemouvement: new Date(),
        quantite: ligne.quantite,
        motif:`Nouvelle vente#: ${vente.id}`,
        typedemouvement:"sortie"
    })
    }
    else {
        // on trouve le stock a debité c'est le stock d'origine
    const produitOrigine = ligne.Stock.Produit.Origine.id
    const magasinOrigine = vente.magasin
    const lestock = await Stock.findOne({
        where:{
            produit:produitOrigine,
            magasin: magasinOrigine
        }
    })
    await Mouvementdestock.create({
        stock: lestock.id,
        datemouvement: new Date(),
        quantite: ligne.quantiteorigine,
        motif:`Nouvelle vente#: ${vente.id}`,
        typedemouvement:"sortie"
    })
    }
           
    })

    // on credite la caisse du magasin qui a vendu
    const caisseMagasin = await Caissemagasin.findOne({
        where: {
            magasin:vente.magasin
        }
    })
    await Mouvementdecaisse.create({
        caissemagasin:caisseMagasin.id,
        montant:vente.montant,
        typedemouvement:"credit",
        motif:`Nouvelle vente #: ${vente.id}`,
    })

}

venteService.imprimer = (vente, res) => {

  let doc = new PDFDocument({
    size: "A4",
    margin: 30
  });

  fonctionsDocument.genererEntete(doc)
  fonctionsDocument.generateHr(doc, 90)
  fonctionsVente.genererDetailsvente(doc, vente)
  fonctionsVente.genererInfosClient(doc, vente)
  fonctionsDocument.genererPiedDePage(doc);
  doc.pipe(res)
  doc.end();

}

///****Annulation de la vente */
venteService.annuler = async (vente) => {
// on débite la caisse qui a effectué la vente

const caisse = await Caissemagasin.findOne({
    where:{
        magasin:vente.magasin
    }
}) 

await Mouvementdecaisse.create({

        caissemagasin:caisse.id,
        montant:vente.montant,
        typedemouvement:"debit",
        motif:`Annulation de la vente #: ${vente.id}`,
})

// on re-alimante le stock du magasin
const ligneventes = vente.Ligneventes

    ligneventes.forEach(async (ligne) => {

        if(ligne.Stock.Produit.produitdorigine === null) {
    await Mouvementdestock.create({
        stock: ligne.stock,
        datemouvement: new Date(),
        quantite: ligne.quantite,
        motif:`Annulation de la vente#: ${vente.id}`,
        typedemouvement:"entree"
    })
    }
    else {
        // on trouve le stock a debité c'est le stock d'origine
    const produitOrigine = ligne.Stock.Produit.Origine.id
    const magasinOrigine = vente.magasin
    const lestock = await Stock.findOne({
        where:{
            produit:produitOrigine,
            magasin: magasinOrigine
        }
    })
    await Mouvementdestock.create({
        stock: lestock.id,
        datemouvement: new Date(),
        quantite: ligne.quantiteorigine,
        motif:`Annulation de la vente#: ${vente.id}`,
        typedemouvement:"entree"
    })
    }
           
    })

}

module.exports = venteService