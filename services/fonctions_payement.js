const entreprise = require("./entreprise");
const fonctionsDocument = require("./fonctions_document");
const { NumberToLetter } = require("convertir-nombre-lettre");

const {
    format
  } = require("date-fns");



const fonctionsPayement = {}


fonctionsPayement.genererInfosClients = (doc, payementclient) => {
    
    doc
    .fillColor("#444444")
    .fontSize(20)
    .text(`${entreprise.typedeDocument}# ${entreprise.prefixe}${payementclient.id}`, 50, 120);
  
     fonctionsDocument.generateHr(doc, 145);
  
      const customerInformationTop = 160;
  
   doc
    .fontSize(10)
    .text(`${entreprise.typedeDocument} #:`, 50, customerInformationTop)
    .font("Helvetica-Bold")
    .text(`${entreprise.prefixe}${payementclient.id}`, 150, customerInformationTop)
    .font("Helvetica")
    .text("Date:", 50, customerInformationTop + 15)
    .text(formatDate(payementclient.datepayement), 150, customerInformationTop + 15)
    .font("Helvetica-Bold")
    .text(`${payementclient.Facture.Client?.nom?? ""} ${payementclient.Facture.Client?.prenom?? ""}`, 350, customerInformationTop)
    .font("Helvetica")
    .text(payementclient.Facture.Client?.telephone ?? "", 350, customerInformationTop + 15)
    .text(`${payementclient.Facture.Client?.email ?? ""}\n ${payementclient.Facture.Client?.adresse ?? ""}`,350,customerInformationTop + 30
    )
    .moveDown();
    fonctionsDocument.generateHr(doc, customerInformationTop+52);

}

fonctionsPayement.genererDetailsRecu = (doc, payementclient) => {

  const entetes = [
    {
      label: "Montant versé",
      headerColor:entreprise.couleur,
      headerOpacity:1,
      valign: "center"
    },
    {
      label: "Mode de payement",
      headerColor:entreprise.couleur,
      headerOpacity:1,
      valign: "center"
    },
    
    {
      label: "Ref. facture",
      headerColor:entreprise.couleur,
      headerOpacity:1,
      valign: "center"
    },
    {
      label: "Payements antérieurs",
      headerColor:entreprise.couleur,
      headerOpacity:1,
      valign: "center"
    },
    {
      label: "reste à payer",
      headerColor:entreprise.couleur,
      headerOpacity:1,
      valign: "center"
    },
  ]
  const details = [
[
  payementclient.montant.toLocaleString('ca-CA'),
  'PAYEMENT CASH',
  `FAC${payementclient.Facture.id}`,
  (payementclient.Facture?.montantpaye?? "").toLocaleString('ca-CA'),
  (payementclient.Facture?.resteapayer?? "").toLocaleString('ca-CA')

]

  ]



  const latable = {
    // columnsSize: [ 200, 100, 100 ],
    headers: entetes,
    rows: details,
    headerColor: entreprise.couleur,
  };
  doc.moveDown()
  doc.moveDown()
  doc
    .font("Helvetica")
    .fontSize(10)
    .text('Informations sur le payement', 30, 250)
  doc.moveDown()
  doc.table(latable, {
 //   columnsSize:  entreprise.afficherPhotos == true? [50, 190, 75, 200] : [0, 190+60, 95, 180]  ,
    //headerColor: entreprise.couleur,
    headerOpacity: 1,
    width: 530,
    padding: 5,
    prepareHeader: () => doc.font("Helvetica-Bold").fontSize(10).fillColor("#FFFFFF"),
    //      prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => doc.font("Helvetica").fontSize(8),
    prepareRow: (row, indexColumn, indexRow, rectRow) => {
      doc.font("Helvetica").fontSize(10).fillColor("#444444")

    },
  });

  doc.moveDown()
  doc.moveDown()
  doc.moveDown()

  doc
    .font("Helvetica")
    .fontSize(10)
    .text(`Reçu de versement de la somme de:`, 30)
    .font("Helvetica-Bold")
    .text(NumberToLetter(payementclient.montant).toUpperCase()+" "+entreprise.devise)

  doc.moveDown()
  doc.moveDown()
  doc.moveDown()

  doc
    .font("Helvetica")
    .fontSize(10)
    .text('Nom et signature:', 30)


}

module.exports = fonctionsPayement








function formatCurrency(cents) {
    return cents.toLocaleString("ca-CA") + " GNF";
  }
  
  function formatDate(date) {
    return date == null ? "" : format(date, "dd/MM/yyyy")
  }