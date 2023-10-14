const fs = require("fs");
const PDFDocument = require("pdfkit-table");
const entreprise = require("./entreprise")
const facturefournisseurService = {}
const {
  format
} = require("date-fns");
const fonctionsDocument = require("./fonctions_document");
const fonctionsFacturefournisseur = require("./fonctions_facturefournisseur");
const facturefournisseur = require("../models/facturefournisseur");

// Génération du fichier PDF d'une commande
facturefournisseurService.genererFacturefournisseur = (facturefournisseur, res) => {
  let doc = new PDFDocument({
    size: "A4",
    margin: 30
  });

  fonctionsDocument.genererEntete(doc)
  fonctionsDocument.generateHr(doc, 90)
  fonctionsFacturefournisseur.genererInfosFournisseur(doc, facturefournisseur)
  fonctionsFacturefournisseur.genererDetailsfacture(doc, facturefournisseur)
  //fonctionsFacture.genererInfosClient(doc, facture)
  //fonctionsFacture.genererDetailsfacture(doc, facture)
  fonctionsDocument.genererPiedDePage(doc);
  doc.pipe(res)
  doc.end();
}

module.exports = facturefournisseurService