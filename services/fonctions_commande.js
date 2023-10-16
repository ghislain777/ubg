const PDFDocument = require("pdfkit-table");
const entreprise = require("./entreprise")
const {Commande, Lignecommande, Stock, Mouvementdestock, Facture, Lignefacture} = require("../models");
const fonctionsDocument = require("./fonctions_document");
const { NumberToLetter } = require("convertir-nombre-lettre");
const {
    format
  } = require("date-fns");
  
const fonctionsCommande = {}

fonctionsCommande.genererInfosClient = (doc, commande) => {
    
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
    .text("Date:", 50, customerInformationTop + 15)
    .text(formatDate(commande.datecommande), 150, customerInformationTop + 15)
    .text("Statut: ", 50, customerInformationTop + 30)
    .font("Helvetica-Bold")
    .text(
      commande.statut,
      150,
      customerInformationTop + 30
    )
  
    .font("Helvetica-Bold")
    .text(`${commande.Client?.nom?? ""} ${commande.Client?.prenom?? ""}`, 350, customerInformationTop)
    .font("Helvetica")
    .text(commande.Client?.telephone ?? "", 350, customerInformationTop + 15)
    .text(`${commande.Client?.email ?? ""}\n ${commande.Client?.adresseligne ?? ""}`,350,customerInformationTop + 30
    )
    .moveDown();
  
    fonctionsDocument.generateHr(doc, customerInformationTop+52);
  
    }



fonctionsCommande.genererModalitesDePayement = (doc, commande) => {

    doc.fontSize(10).fillColor("#444444").text("Modalités de payement", 50)
    const latable = {
      headers: ["Payements", "Acompte", "Versement #1", "Versement #2", "Versement #3"],
      rows: [
        ["Montants", commande.acompte?.toLocaleString("fr-CA") ?? 0, commande.versement1?.toLocaleString("fr-CA") ?? 0, commande.versement2?.toLocaleString("fr-CA") ?? 0, commande?.versement3?.toLocaleString("fr-CA")],
        ["Dates", formatDate(commande.createdAt), formatDate(commande.dateversement1), formatDate(commande.dateversement2), formatDate(commande.dateversement3)],
  
      ]
    };
  
    doc.moveDown()
    doc.table(latable, {
      headerColor: entreprise.couleur,
      headerOpacity: 1,
      width: 500,
      padding: 5,
      prepareHeader: () => doc.font("Helvetica-Bold").fontSize(10),
      //      prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => doc.font("Helvetica").fontSize(8),
      prepareRow: (row, indexColumn, indexRow, rectRow) => {
        doc.font("Helvetica").fontSize(10)
        //.text(row.montant)
        // indexRow === 0 && doc.addBackground(rectRow,'blue',0.3);
      },
    });
    doc.moveDown()
    doc.fontSize(10).font("Helvetica-Bold").fillColor("#444444").text(commande.modalite ?? "", 50)
  
    }


   function formatCurrency(cents) {
    return cents.toLocaleString("ca-CA") + " GNF";
  }
  
  function formatDate(date) {
    return date == null ? "" : format(date, "dd/MM/yyyy")
  }

  // Détails de la commande
  fonctionsCommande.genererDetailsCommande = (doc, commande) => {

    let lignes = commande.Lignecommandes.map((ligne) => {
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
        ["Total", commande.soustotal.toLocaleString("ca-CA")],
        ["TVA(18%)", (commande.soustotal*0.18).toLocaleString("ca-CA")],
        ["Montant total", commande.montant.toLocaleString("ca-CA")+ ` ${entreprise.devise}`],
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
   .text(NumberToLetter(commande.montant) +" "+ entreprise.devise)
    doc.moveDown()
  
    }


  fonctionsCommande.genererPayementsAnterieurs = (doc, commande) => {

    doc.fontSize(10).fillColor("#444444").text("Payements antérieurs", 50)
  
    var lignes = []
  
    commande.Payements.forEach((payement) => {
      lignes.push([formatDate(payement.createdAt), payement.montant.toLocaleString("ca-CA"), payement.description, payement.montantrestant.toLocaleString("ca-CA")])
  
    });
    console.log(lignes)
    const table = {
      headers: ["Date de payement", "Montant payé", "Description", "Montant restant"],
      rows: lignes
    };
    // A4 595.28 x 841.89 (portrait) (about width sizes)
    // width
    doc.moveDown()
    lignes.length != 0 && doc.table(table, {
      headerColor: entreprise.couleur,
      headerOpacity: 1,
      width: 500,
      padding: 5,
      prepareHeader: () => doc.font("Helvetica-Bold").fontSize(10),
      //      prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => doc.font("Helvetica").fontSize(8),
      prepareRow: (row, indexColumn, indexRow, rectRow) => {
        doc.font("Helvetica").fontSize(10)
        //.text(row.montant)
        // indexRow === 0 && doc.addBackground(rectRow,'blue',0.3);
      },
  
    });
  
    }

    fonctionsCommande.genererModalitesDePayement = (doc, commande) => {

        doc.fontSize(10).fillColor("#444444").text("Modalités de payement", 50)
        const latable = {
          headers: ["Payements", "Acompte", "Versement #1", "Versement #2", "Versement #3"],
          rows: [
            ["Montants", commande.acompte?.toLocaleString("fr-CA") ?? 0, commande.versement1?.toLocaleString("fr-CA") ?? 0, commande.versement2?.toLocaleString("fr-CA") ?? 0, commande?.versement3?.toLocaleString("fr-CA")],
            ["Dates", formatDate(commande.createdAt), formatDate(commande.dateversement1), formatDate(commande.dateversement2), formatDate(commande.dateversement3)],
      
          ]
        };
      
        doc.moveDown()
        doc.table(latable, {
          headerColor: entreprise.couleur,
          headerOpacity: 1,
          width: 500,
          padding: 5,
          prepareHeader: () => doc.font("Helvetica-Bold").fontSize(10),
          //      prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => doc.font("Helvetica").fontSize(8),
          prepareRow: (row, indexColumn, indexRow, rectRow) => {
            doc.font("Helvetica").fontSize(10)
            //.text(row.montant)
            // indexRow === 0 && doc.addBackground(rectRow,'blue',0.3);
          },
        });
        doc.moveDown()
        doc.fontSize(10).font("Helvetica-Bold").fillColor("#444444").text(commande.modalite ?? "", 50)
      
        }

module.exports = fonctionsCommande      
       

