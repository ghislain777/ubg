

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const { Mouvementdecaisse, Caissemagasin, Mouvementdecompteclient, Facture, Magasin, Commande, Modedepayement, Client, Payementclient, Lignefacture, Stock, Produit, Media } = require('../models');
const factureService = require('../services/facture_service');
    const factureController = {}
    
 factureController.includeFacture = [
    {model: Commande},
    Modedepayement,Client, Magasin
 ]
 factureController.add = async (req, res) => {
        try {
            const response = await Facture.create(req.body)
    
    const retour = await Facture.findOne({
        where:{
            id:response.id
        },
        include: factureController.includeFacture
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 factureController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Facture.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: factureController.includeFacture,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 factureController.update = async (req, res) => {
        try {
            const response = await Facture.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const facture = await Facture.findOne({
                where: { id: req.params.id },
                include: factureController.includeFacture
            })
            res.status(200).send(facture)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 factureController.delete = async (req, res) => {
        try {
            const response = await Facture.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Facture supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 factureController.getById = async (req, res) => {
        try {
            const response = await Facture.findOne({
                where: { id: req.params.id },
                include: factureController.includeFacture
            })
            if (response == null) {
                res.status(404).send('Facture non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 factureController.getBy = async (req, res) => {
        try {
          const  response = await Facture.findAndCountAll({
                where: req.body,
                include: factureController.includeFacture
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    // Payement de la facture par le client....

    factureController.payerFacture = async (req, res) => {
        const facture = await Facture.findByPk(req.params.id)
        const montantPaye = +req.body.montant
        try {
            const response = await Payementclient.create({
                facture: +req.params.id,
                montant: montantPaye,
                soldeapres: facture.resteapayer - montantPaye,
          
            })


            // on credite la caisse du magasin ayant fait la vente

            const caisseMagasin = await  Caissemagasin.findOne({
              where:{
                 magasin:facture.magasin
                         }
                    })

await Mouvementdecaisse.create({
    caissemagasin:caisseMagasin.id,
    montant:montantPaye,
    motif: `Payment de la facture # ${facture.id}`,
    typedemouvement:"credit"
})
//on met à jour la facture pour refleter le payement
await Facture.update({
    resteapayer:facture.resteapayer - montantPaye,
    montantpaye: facture.montantpaye + montantPaye,
    statut:facture.resteapayer <= montantPaye? "Payée": "Partiellement payée",
    etat:facture.resteapayer <= montantPaye? "Fermé": "Ouvert"
}, {where:{
    id: facture.id
}})

// on credite le compte du client pour refleter ce payement
await Mouvementdecompteclient.create({
    client: facture.client,
    montant:montantPaye,
    motif: `Payement pour la facture ${facture.id}`,
    typedemouvement:"credit"
})


   res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    
    }
    
    factureController.imprimerFacture = async (req,res) => {
        const facture = await Facture.findOne(
            {
                where:{
                    id: req.params.id
                },
                include:[
                    {
                        model: Lignefacture,
                        include: [{
                            model: Stock,
                            include: [{model: Produit, include:[Media]}, ]
                        }]
                    },
                    {
                        model: Client,
                    },
                    Payementclient
                ]
            })
            
      factureService.genererFacture(facture, res)
       // res.send("facture générée")
    
    }
    
    module.exports = factureController
