const { format } = require('date-fns');
const {Client, Produit, Magasin, Caissemagasin, Vente, Fournisseur, Facture, sequelize} = require('../models')
const { Sequelize, Op } = require('sequelize');

const appService = {}
appService.getdashboard = (debut, fin) => {

return new  Promise((resolve, reject) => {

const retour = {}

//****statistiques */

// total des caisses réunies

// somme des caisses, compte clients,
const sommeDesCaissesPromise =  Caissemagasin.sum('solde')
const sommeDesComptesClientspomise = Client.sum("compte")
const totalMagasinsPromise = Magasin.count()
const totalClientsPromise = Client.count()
const totalFoirnisseurPromise = Fournisseur.count()


///***** courbes de stats */

const chiffreDaffairePourUnePeriode = Facture.findAll({
    attributes:[
        [sequelize.fn('DATE', sequelize.col('datefacture')), 'ladate'],
        [sequelize.fn('sum', sequelize.col("montant")), 'somme']
    ],
     where:{
         datefacture: {[Op.between]: [debut, fin]},
         statut: {[Op.ne]:"Annulee"}
     },
    group:['ladate']
})

const nombreDeVentesPourUnePeriode = Facture.findAll({
    attributes:[
        [sequelize.fn('DATE', sequelize.col('datefacture')), 'ladate'],
        [sequelize.fn('count', sequelize.col("id")), 'somme']
    ],
     where:{
         datefacture: {[Op.between]: [debut, fin]},
         statut: {[Op.ne]:"Annulee"}
     },
    group:['ladate'],
})


//**stats sur les ventes directes */
const chiffreDaffaireVenteDirectePourUnePeriode = Vente.findAll({
    attributes:[
        [sequelize.fn('DATE', sequelize.col('datevente')), 'ladate'],
        [sequelize.fn('sum', sequelize.col("montant")), 'somme']
    ],
     where:{
         datevente: {[Op.between]: [debut, fin]},
         statut: {[Op.ne]:"Annulee"}
     },
    group:['ladate']
})


const nombreDeVentesDirectesPourUnePeriode = Vente.findAll({
    attributes:[
        [sequelize.fn('DATE', sequelize.col('datevente')), 'ladate'],
        [sequelize.fn('count', sequelize.col("id")), 'somme']
    ],
     where:{
         datevente: {[Op.between]: [debut, fin]},
         statut: {[Op.ne]:"Annulee"}
     },
    group:['ladate'],
}
)

//** stats sur les chiffes d'affaires par magasins  */
const chiffreDaffaireParMagasinSurUnePeriode = Facture.findAll({
    attributes:[
        'magasin',
        [sequelize.fn('DATE', sequelize.col('datefacture')), 'ladate'],
        [sequelize.fn('sum', sequelize.col("montant")), 'somme']
    ],
     where:{
         datefacture: {[Op.between]: [debut, fin]},
         statut: {[Op.ne]:"Annulee"}
     },
    group:['ladate', 'magasin'],
    order:[['ladate', "asc"]]
})

const chiffreDaffaireVenteDirecteParMagasinSurUnePeriode = Vente.findAll({

    attributes:[
        'magasin',
        [sequelize.fn('DATE', sequelize.col('datevente')), 'ladate'],
        [sequelize.fn('sum', sequelize.col("montant")), 'somme']
    ],
     where:{
         datevente: {[Op.between]: [debut, fin]},
         statut: {[Op.ne]:"Annulee"}
     },
    group:['ladate', 'magasin'],
    order:[['ladate', "asc"]]
    
})

///**** Stats sur les clients */


Promise.all([
   sommeDesCaissesPromise,
   sommeDesComptesClientspomise,
   totalClientsPromise,
   totalFoirnisseurPromise,
   totalMagasinsPromise,
   chiffreDaffairePourUnePeriode,
   chiffreDaffaireVenteDirectePourUnePeriode,
   nombreDeVentesPourUnePeriode,
   nombreDeVentesDirectesPourUnePeriode,
   chiffreDaffaireParMagasinSurUnePeriode,
   chiffreDaffaireVenteDirecteParMagasinSurUnePeriode,
   
]).then((data)=>{

retour.statGlobal = [
    {
        id: 1,
        nom: "sommeDesCaisses",
        label:"Somme des caisses",
        data: data[0],
        devise:"GNF"
    },
    {
        id: 2,
        nom: "sommeDesComptesClients",
        label:"Comptes clients",
        data: data[1],
        devise:"GNF"
    },
    {
        id: 3,
        nom: "totalDesClients",
        label:"Total des clients",
        data: data[2],
        devise:""
    }
    ,
    {
        id: 4,
        nom: "totalDesFournisseurs",
        label:"Total des fournisseurs",
        data: data[3],
        devise:""
    },
    {
        id: 5,
        nom: "totalDesMagasins",
        label:"Total des magasins",
        data: data[4],
        devise:""
    }
]
retour.statPeriode = [
    {
        id: 6,
        nom: "chiffreDaffairePourUnePeriode",
        label:`Chiffre d'affaire `,
        titre:`Chiffre d'affaire allant du ${format(debut, "dd/MM/yyyy")} au ${format(fin, "dd/MM/yyyy")}`,
        data: data[5]
    },
    {
        id:7 ,
        nom: "chiffreDaffaireVenteDirectePourUnePeriode",
        label:`Chiffre d'affaire des ventes`,
        titre:`Chiffre d'affaire des ventes directes du ${format(debut, "dd/MM/yy")} au ${format(fin, "dd/MM/yy")}`,
        data: data[6]
    },
    
    {
        id: 8,
        nom: "nombreDeVentesPourUnePeriode",
        label:`Nombre de ventes `,
        titre:`Nombre de ventes du ${format(debut, "dd/MM/yy")} au ${format(fin, "dd/MM/yy")}`,
        data: data[7]
    },
    
    {
        id: 9,
        nom: "nombreDeVentesDirectesPourUnePeriode",
        label:`Nombre de ventes directes`,
        titre:`Nombre de ventes directes du ${format(debut, "dd/MM/yy")} au ${format(fin, "dd/MM/yy")}`,
        data: data[8]
    },
    
    
    
]
retour.statParMagasin = [
    {
        id: 10,
        nom: "chiffreDaffaireParMagasinSurUnePeriode",
        label:`Chiffre d'affaire par magain `,
        titre:`Chiffre d'affaire par magain du ${format(debut, "dd/MM/yy")} au ${format(fin, "dd/MM/yy")}`,
        data: data[9]
    },
    
    {
        id: 11,
        nom: "chiffreDaffaireVenteDirecteParMagasinSurUnePeriode",
        label:`Chiffre d'affaire vente directe par magain`,
        titre:`Chiffre d'affaire vente directe par magain du ${format(debut, "dd/MM/yy")} au ${format(fin, "dd/MM/yy")}`,
        data: data[10]
    }  
]
   
    resolve(retour)
})
})  
}

module.exports = appService

