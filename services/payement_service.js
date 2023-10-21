const PDFDocument = require("pdfkit-table");
const entreprise = require("./entreprise");
const fonctionsPayement = require("./fonctions_payement");
const fonctionsDocument = require("./fonctions_document");

const payementService = {}

payementService.genererRecu = (payementclient, res) => {

    entreprise.typedeDocument = "Reçu de payement"
    entreprise.prefixe = "RP"
    let doc = new PDFDocument({
      size: "A4",
      margin: 30,
      //layout: 'landscape'
    });
  
    fonctionsDocument.genererEntete(doc)
    fonctionsDocument.generateHr(doc, 90)
    fonctionsPayement.genererInfosClients(doc, payementclient);
    fonctionsPayement.genererDetailsRecu(doc,payementclient)
    fonctionsDocument.genererPiedDePage(doc);
    doc.pipe(res)
    doc.end();
    // doc.pipe(fs.createWriteStream(`public/fichiers/commandes/test.pdf`));

}



module.exports = payementService