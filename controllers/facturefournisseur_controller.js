

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Facturefournisseur, Mouvementdecomptefournisseur,  Stock, Produit, Media, Payementdournisseur, Lignefacturefournisseur, Modedepayement,Caissemagasin, Mouvementdecaisse, Payementfournisseur, Commandefournisseur, Fournisseur, Magasin  } = require('../models');
const facturefournisseurService = require('../services/facturefournisseur_service');
    const facturefournisseurController = {}
    
 facturefournisseurController.includeFacturefournisseur = [
    Modedepayement,Commandefournisseur,Fournisseur,Magasin,]
 facturefournisseurController.add = async (req, res) => {
        try {
            const response = await Facturefournisseur.create(req.body)
    
    const retour = await Facturefournisseur.findOne({
        where:{
            id:response.id
        },
        include: facturefournisseurController.includeFacturefournisseur
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 facturefournisseurController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Facturefournisseur.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: facturefournisseurController.includeFacturefournisseur,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 facturefournisseurController.update = async (req, res) => {
        try {
            const response = await Facturefournisseur.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const facturefournisseur = await Facturefournisseur.findOne({
                where: { id: req.params.id },
                include: facturefournisseurController.includeFacturefournisseur
            })
            res.status(200).send(facturefournisseur)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 facturefournisseurController.delete = async (req, res) => {
        try {
            const response = await Facturefournisseur.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Facturefournisseur supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 facturefournisseurController.getById = async (req, res) => {
        try {
            const response = await Facturefournisseur.findOne({
                where: { id: req.params.id },
                include: facturefournisseurController.includeFacturefournisseur
            })
            if (response == null) {
                res.status(404).send('Facturefournisseur non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 facturefournisseurController.getBy = async (req, res) => {
        try {
          const  response = await Facturefournisseur.findAndCountAll({
                where: req.body,
                include: facturefournisseurController.includeFacturefournisseur
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    // payement de facture fournisseur
    facturefournisseurController.payer = async (req, res) => {

        const facturefournisseur = await Facturefournisseur.findByPk(req.params.id)
        const montantPaye = +req.body.montant
        try {
            const response = await Payementfournisseur.create({
                facturefournisseur: +req.params.id,
                montant: montantPaye,
                soldeapres: facturefournisseur.resteapayer - montantPaye,
          
            })

            // on debit la caisse du magasin ayant fait la vente

            const caisseMagasin = await  Caissemagasin.findOne({
              where:{
                 magasin:facturefournisseur.magasin
    }
})

await Mouvementdecaisse.create({
    caissemagasin:caisseMagasin.id,
    montant:montantPaye,
    motif: `Payment de la facture fournisseur # ${facturefournisseur.id}`,
    typedemouvement:"debit"
})
//on met à jour la facturefournisseur pour refleter le payement
const lereste = facturefournisseur.resteapayer <= montantPaye ? {etat:"Fermé", statut:"Payée", payementcomplet:true} : {statut:"Partiellement payée"}

await Facturefournisseur.update({
    ...lereste,
    resteapayer:facturefournisseur.resteapayer - montantPaye,
    montantpaye: facturefournisseur.montantpaye + montantPaye
}, {where:{
    id: facturefournisseur.id
}})


await Mouvementdecomptefournisseur.create({
    fournisseur: facturefournisseur.fournisseur,
    montant: montantPaye,
    motif:`Payement facture fournisseur # ${facturefournisseur.id}`,
    typedemouvement:"debit"
})

   res.send(response)
        } catch (err) {
            res.status(500).send(err.stack)
        }
    
    }
    
    facturefournisseurController.imprimer = async (req,res) => {
        const facturefournisseur = await Facturefournisseur.findOne(
            {
                where:{
                    id: req.params.id
                },
                include:[
                    {
                        model: Lignefacturefournisseur,
                        include: [{
                            model: Stock,
                            include: [{model: Produit, include:[Media]}, ]
                        }]
                    },
                    {
                        model: Fournisseur,
                    },
                    Payementfournisseur
                ]
            })
            
      facturefournisseurService.genererFacturefournisseur(facturefournisseur, res)
       // res.send("facture générée")
    
    }

    
    module.exports = facturefournisseurController
