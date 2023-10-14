const fs = require("fs");
const PDFDocument = require("pdfkit-table");
const entreprise = require("./entreprise")
const factureService = {}
const {
  format
} = require("date-fns");
const fonctionsDocument = require("./fonctions_document");
const fonctionsFacture = require("./fonctions_facture");

// Génération du fichier PDF d'une commande
factureService.genererFacture = (facture, res) => {
  let doc = new PDFDocument({
    size: "A4",
    margin: 30
  });

  fonctionsDocument.genererEntete(doc)
  fonctionsDocument.generateHr(doc, 90)
  fonctionsFacture.genererInfosClient(doc, facture)
  fonctionsFacture.genererDetailsfacture(doc, facture)
  fonctionsDocument.genererPiedDePage(doc);
  doc.pipe(res)
  doc.end();
}

module.exports = factureService