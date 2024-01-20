const fs = require("fs");
const PDFDocument = require("pdfkit-table");
const entreprise = require("./entreprise")
const transfertstockService = {}
const {
  format
} = require("date-fns");
const fonctionsDocument = require("./fonctions_document");
const fonctionsTransfertstock = require("./fonctions_transfertstock");

// Génération du fichier PDF d'une commande
transfertstockService.bondexpedition = (transfertstock, res) => {
  let doc = new PDFDocument({
    size: "A4",
    margin: 30
  });

  fonctionsDocument.genererEntete(doc)
  fonctionsDocument.generateHr(doc, 90)
  fonctionsTransfertstock.genererInfosClient(doc, transfertstock, "Bon d'expédition")
 fonctionsTransfertstock.genererDetailstransfertstock(doc, transfertstock)
  fonctionsDocument.genererPiedDePage(doc);
  doc.pipe(res)
  doc.end();
}

transfertstockService.bondereception = (transfertstock, res) => {
    let doc = new PDFDocument({
      size: "A4",
      margin: 30
    });
  
    fonctionsDocument.genererEntete(doc)
    fonctionsDocument.generateHr(doc, 90)
    fonctionsTransfertstock.genererInfosClient(doc, transfertstock, "Bon de reception")
   fonctionsTransfertstock.genererDetailstransfertstock(doc, transfertstock)
    fonctionsDocument.genererPiedDePage(doc);
    doc.pipe(res)
    doc.end();
  }
  

module.exports = transfertstockService