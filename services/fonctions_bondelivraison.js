const entreprise = require("./entreprise");
const fonctionsDocument = require("./fonctions_document");
const {
    format
  } = require("date-fns");
  


const fonctionsBondelivraison = {}

 fonctionsBondelivraison.genererinfosClients = (doc, commande) => {
    
  entreprise.typedeDocument = "Bon de livraison"
  entreprise.prefixe ="BL"
    
  doc
  .fillColor("#444444")
  .fontSize(20)
  .text(`${entreprise.typedeDocument}# ${entreprise.prefixe}${commande.id}`, 50, 120);
   fonctionsDocument.generateHr(doc, 145);
    const customerInformationTop = 160;

 doc
  .fontSize(10)
  .text(`${entreprise.typedeDocument} #:`, 50, customerInformationTop)
  .font("Helvetica-Bold")
  .text(`${entreprise.prefixe}${commande.id}`, 150, customerInformationTop)
  .font("Helvetica")
  .text("Date de livraison:", 50, customerInformationTop + 15)
  .text(formatDate(commande.datelivraison), 150, customerInformationTop + 15)
  .text("Date de reception: ", 50, customerInformationTop + 30)
  .font("Helvetica-Bold")
  .text(
    '',
    150,
    customerInformationTop + 30
  )

  .font("Helvetica-Bold")
  .text(`${commande.Client?.nom?? ""} ${commande.Client?.prenom?? ""}`, 350, customerInformationTop)
  .font("Helvetica")
  .text(commande.Client?.telephone ?? "", 350, customerInformationTop + 15)
  .text(`${commande.Client?.email ?? ""}\n ${commande.Client?.adresse ?? ""}`,350,customerInformationTop + 30
  )
  .moveDown();
  fonctionsDocument.generateHr(doc, customerInformationTop+52);

}

 fonctionsBondelivraison.genererDetailsBondecommande = (doc, commande) => {

    let lignes = commande.Lignecommandes.map((ligne) => {
        const stock = ligne.Stock
        if(entreprise.afficherPhotos === false) {
          return [
            "",
            stock.Produit.nom,
            ligne.quantite.toLocaleString("ca-CA"),
            ""
          ]
        }
        else {
          return [
            stock.Produit.Media[0],
            stock.Produit.nom,
            ligne.quantite.toLocaleString("ca-CA"),
            ""
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
          label: "Quantité",
          headerColor:entreprise.couleur,
          headerOpacity:1,
          valign: "center"
        },
        {
          label: "Remarque",
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
        .text('Produits livrés', 30, 250)
      doc.moveDown()
      doc.table(latable, {
        columnsSize:  entreprise.afficherPhotos == true? [50, 190, 75, 200] : [0, 190+60, 95, 180]  ,
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
        .text('Receptionné par:', 30)


 }



 function formatCurrency(cents) {
    return cents.toLocaleString("ca-CA") + " GNF";
  }
  
  function formatDate(date) {
    return date == null ? "" : format(date, "dd/MM/yyyy")
  }


 module.exports = fonctionsBondelivraison