const PDFDocument = require("pdfkit-table");
let entreprise = require("./entreprise")
const {Commandefournisseur, Lignecommandefournisseur, Stock, Mouvementdestock, Facture, Lignefacture} = require("../models");
const fonctionsDocument = require("./fonctions_document");
const {
    format
  } = require("date-fns");
  
const fonctionsCommandefournisseur = {}
entreprise.prefixe = "CF"
entreprise.typedeDocument = "Commande fournisseur"

fonctionsCommandefournisseur.genererInfosFournisseur = (doc, commandefournisseur) => {
    
    doc
    .fillColor("#444444")
    .fontSize(20)
    .text(`${entreprise.typedeDocument}# ${entreprise.prefixe}${commandefournisseur.id}`, 50, 120);
  
     fonctionsDocument.generateHr(doc, 145);
  
      const customerInformationTop = 160;
  
   doc
    .fontSize(10)
    .text(`${entreprise.typedeDocument} #:`, 50, customerInformationTop)
    .font("Helvetica-Bold")
    .text(`${entreprise.prefixe}${commandefournisseur.id}`, 150, customerInformationTop)
    .font("Helvetica")
    .text("Date:", 50, customerInformationTop + 15)
    .text(formatDate(commandefournisseur.datecommande), 150, customerInformationTop + 15)
    .text("Statut: ", 50, customerInformationTop + 30)
    .font("Helvetica-Bold")
    .text(
      commandefournisseur.statut,
      150,
      customerInformationTop + 30
    )
  
    .font("Helvetica-Bold")
    .text(`${commandefournisseur.Fournisseur?.nom?? ""} ${commandefournisseur.Fournisseur?.prenom?? ""}`, 350, customerInformationTop)
    .font("Helvetica")
    .text(commandefournisseur.Fournisseur?.telephone ?? "", 350, customerInformationTop + 15)
    .text(`${commandefournisseur.Fournisseur?.email ?? ""}\n ${commandefournisseur.Fournisseur?.adresseligne ?? ""}`,350,customerInformationTop + 30
    )
    .moveDown();
  
    fonctionsDocument.generateHr(doc, customerInformationTop+52);
  
    }



fonctionsCommandefournisseur.genererModalitesDePayement = (doc, commandefournisseur) => {

    doc.fontSize(10).fillColor("#444444").text("Modalités de payement", 50)
    const latable = {
      headers: ["Payements", "Acompte", "Versement #1", "Versement #2", "Versement #3"],
      rows: [
        ["Montants", commandefournisseur.acompte?.toLocaleString("fr-CA") ?? 0, commandefournisseur.versement1?.toLocaleString("fr-CA") ?? 0, commandefournisseur.versement2?.toLocaleString("fr-CA") ?? 0, commandefournisseur?.versement3?.toLocaleString("fr-CA")],
        ["Dates", formatDate(commandefournisseur.createdAt), formatDate(commandefournisseur.dateversement1), formatDate(commandefournisseur.dateversement2), formatDate(commandefournisseur.dateversement3)],
  
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
    doc.fontSize(10).font("Helvetica-Bold").fillColor("#444444").text(commandefournisseur.modalite ?? "", 50)
  
    }


   function formatCurrency(cents) {
    return cents.toLocaleString("ca-CA") + " GNF";
  }
  
  function formatDate(date) {
    return date == null ? "" : format(date, "dd/MM/yyyy")
  }






  fonctionsCommandefournisseur.genererDetailsCommandefournisseur = (doc, commandefournisseur) => {

    let lignes = commandefournisseur.Lignecommandefournisseurs.map((ligne) => {
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
        ["Total", commandefournisseur.soustotal.toLocaleString("ca-CA")],
        ["Taxe", commandefournisseur.taxe.toLocaleString("ca-CA")],
        ["Montant total", commandefournisseur.montant.toLocaleString("ca-CA")+ ` ${entreprise.devise}`],
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
  
    }



  fonctionsCommandefournisseur.genererPayementsAnterieurs = (doc, commandefournisseur) => {

    doc.fontSize(10).fillColor("#444444").text("Payements antérieurs", 50)
  
    var lignes = []
  
    commandefournisseur.Payements.forEach((payement) => {
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

 
    fonctionsCommandefournisseur.genererModalitesDePayement = (doc, commandefournisseur) => {

        doc.fontSize(10).fillColor("#444444").text("Modalités de payement", 50)
        const latable = {
          headers: ["Payements", "Acompte", "Versement #1", "Versement #2", "Versement #3"],
          rows: [
            ["Montants", commandefournisseur.acompte?.toLocaleString("fr-CA") ?? 0, commandefournisseur.versement1?.toLocaleString("fr-CA") ?? 0, commandefournisseur.versement2?.toLocaleString("fr-CA") ?? 0, commandefournisseur?.versement3?.toLocaleString("fr-CA")],
            ["Dates", formatDate(commandefournisseur.createdAt), formatDate(commandefournisseur.dateversement1), formatDate(commandefournisseur.dateversement2), formatDate(commandefournisseur.dateversement3)],
      
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
        doc.fontSize(10).font("Helvetica-Bold").fillColor("#444444").text(commandefournisseur.modalite ?? "", 50)
      
        }

module.exports = fonctionsCommandefournisseur      
       

