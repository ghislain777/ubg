
const {
  format
} = require("date-fns");
const fonctionsFacture = {}
let entreprise = require("./entreprise")
const fonctionsDocument = require("./fonctions_document")
const { NumberToLetter } = require("convertir-nombre-lettre");


fonctionsFacture.genererDetailsfacture = (doc, facture) => {


    let lignes = facture.Lignefactures.map((ligne) => {
        const stock = ligne.Stock
        if(entreprise.afficherPhotos === false) {
          return [
            "",
            stock.Produit.nom,
            ligne.prixunitaire.toLocaleString("ca-CA"),
            ligne.remise.toLocaleString("ca-CA"),
            ligne.quantite.toLocaleString("ca-CA"),
            (+ligne.prixtotal).toLocaleString("ca-CA")
          ]
        }
        else {
          return [
            stock.Produit.Media[0],
            stock.Produit.nom,
            ligne.prixunitaire.toLocaleString("ca-CA"),
            ligne.remise.toLocaleString("ca-CA"),
            ligne.quantite.toLocaleString("ca-CA"),
            (+ligne.prixtotal).toLocaleString("ca-CA")
            //formatCurrency(ligne.total)
          ]
        }
        //return row
      })
    
      var headers = [
        {
          label: entreprise.afficherPhotos === true?  "Photo" : "",
          headerColor:entreprise.couleur,
          headerOpacity:1,
          renderer: (value, indexColumn, indexRow, row, rectRow, rectCell) => {
            const {
              x,
              y,
              width,
              height
            } = rectCell;
            if(value.length > 0) {
              doc.image(`public${value[0].fichier}`, x, y, {
              height:height
            });
          }
            return null;
          }
        },
        {
          label: "Produit" ,
          headerColor:entreprise.couleur,
          headerOpacity:1,
          valign: "center",
          renderer: (value, indexColumn, indexRow, row, rectRow, rectCell) => {
            const {
              x,
              y,
              width,
              height
            } = rectCell;
            return value
          }
    
        },
        {
          label: "Prix unitaire",
          headerColor:entreprise.couleur,
          headerOpacity:1,
          valign: "center"
        },
        {
          label: "remise",
          headerColor:entreprise.couleur,
          headerOpacity:1,
          valign: "center"
        },
        {
          label: "Quantité",
          headerColor:entreprise.couleur,
          headerOpacity:1,
          valign: "center"
        },
        {
          label: "Prix total",
          align: "right",
          headerColor:entreprise.couleur,
          headerOpacity:1,
          valign: "center"
        }
      ]
      if(entreprise.afficherPhotos === false) {
        //headers.splice(0, 1);
      }
    
      const latable = {
        // columnsSize: [ 200, 100, 100 ],
        headers: headers,
        rows: lignes,
        headerColor: entreprise.couleur,
      };
      doc.moveDown()
      doc.moveDown()
      doc
        .font("Helvetica-Bold")
        .fontSize(10)
        .text('Détails', 30, 250)
      doc.moveDown()
      doc.table(latable, {
        columnsSize:  entreprise.afficherPhotos == true? [50, 190, 75, 50, 85, 85] : [0, 190+50, 75, 50, 85, 85]  ,
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
    
      const tabletotaux = {
    
        headers: [{
          label: "Titre",
          align: "left"
        }, {
          label: "Titre",
          align: "right",
        }],
    
        rows: [
          ["Montant HT", (facture.montant - 18/100*facture.soustotal).toLocaleString("ca-CA")+ ` ${entreprise.devise}`],
          ["TVA(18%)", 18/100*facture.soustotal.toFixed(2).toLocaleString("ca-CA")],
          ["Total TTC", facture.soustotal.toLocaleString("ca-CA")],
        ]
      }
      doc.text('', 570 - 250)
      doc.table(tabletotaux, {
        //headerColor: "#292380",
        align: "right",
        hideHeader: true,
        headerOpacity: 0.5,
        width: 250,
        //separation:false,
        padding: 5,
        prepareHeader: () => doc.font("Helvetica-Bold").fontSize(10),
        //      prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => doc.font("Helvetica").fontSize(8),
        prepareRow: (row, indexColumn, indexRow, rectRow) => {
          doc.font("Helvetica-Bold").fontSize(10)
          //.text(row.montant)
    
        },
      });
    
      doc.moveDown()
       // montant en lettre
      
   doc
   .font("Helvetica").fontSize(10)
   .text( "Ce présent document arrêté au montant de: ", 30)
   .font("Helvetica-Bold").fontSize(10)
   .text(NumberToLetter(facture.montant) +" "+ entreprise.devise)
    doc.moveDown()
    doc.moveDown()
    doc.font("Helvetica").fontSize(10).text('Vendeur:',30)
    doc.font("Helvetica-Bold").fontSize(10).
    text(`${facture.Utilisateur.nom?? ""} ${facture.Utilisateur.prenom?? ""}`,30)
    doc.moveUp()
    doc.font("Helvetica").fontSize(10).
    text(`Le client:`,500)
}


fonctionsFacture.genererInfosClient = (doc, facture) => {
  entreprise.typedeDocument = "Facture"
  entreprise.prefixe ="FAC"
    
  doc
  .fillColor("#444444")
  .fontSize(20)
  .text(`${entreprise.typedeDocument}# ${entreprise.prefixe}${facture.id}`, 50, 120);
   fonctionsDocument.generateHr(doc, 145);
    const customerInformationTop = 160;

 doc
  .fontSize(10)
  .text(`${entreprise.typedeDocument} #:`, 50, customerInformationTop)
  .font("Helvetica-Bold")
  .text(`${entreprise.prefixe}${facture.id}`, 150, customerInformationTop)
  .font("Helvetica")
  .text("Date:", 50, customerInformationTop + 15)
  .text(formatDate(facture.datefacture), 150, customerInformationTop + 15)
  .text("Statut: ", 50, customerInformationTop + 30)
  .font("Helvetica-Bold")
  .text(
    facture.statut,
    150,
    customerInformationTop + 30
  )

  .font("Helvetica-Bold")
  .text(`${facture.Client?.nom?? ""} ${facture.Client?.prenom?? ""}`, 350, customerInformationTop)
  .font("Helvetica")
  .text(facture.Client?.telephone ?? "", 350, customerInformationTop + 15)
  .text(`${facture.Client?.email ?? ""}\n ${facture.Client?.adresse ?? ""}`,350,customerInformationTop + 30
  )
  .moveDown();
  fonctionsDocument.generateHr(doc, customerInformationTop+52);

  }


  function formatCurrency(cents) {
    return cents.toLocaleString("ca-CA") + " GNF";
  }
  
  function formatDate(date) {
    return date == null ? "" : format(date, "dd/MM/yyyy")
  }


  module.exports = fonctionsFacture
