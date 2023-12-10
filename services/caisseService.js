
const {Caissemagasin} = require("../models")


const caisseService = {}

caisseService.crediter = async ({caisseMagasin, montant, motif }) => {
    
await Caissemagasin.update({solde:caisseMagasin.solde+montant}, {
    where:{
        id:caisseMagasin.idd
    }
})


}