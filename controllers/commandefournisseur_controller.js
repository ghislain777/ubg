

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Commandefournisseur, Stock, Magasin, Produit, Fournisseur, Lignecommandefournisseur  } = require('../models');
const commandefournisseurService = require('../services/commandefournisseur_service');
    const commandefournisseurController = {}
    
 commandefournisseurController.includeCommandefournisseur = [

Magasin,
Fournisseur,
Lignecommandefournisseur 

]
 commandefournisseurController.add = async (req, res) => {
    try {

        const {
            fournisseur,
            magasin,
            adresse,
            Lignecommandefournisseurs,
            montant,
            soustotal,
            taxe,
            total
        } = req.body

        if (Lignecommandefournisseurs.length === 0) { // il n'y a pas de produit 
            req.status(402).send("La commande doit comporter au moins un produit")
        } else {

            // on enregistre la commande fournisseur
            const commandefournisseur = await Commandefournisseur.create({
                fournisseur: fournisseur,
                magasin: magasin,
                montant: montant,
                soustotal: soustotal,
                taxe: taxe,
                statut: "Nouveau",
                adresse: adresse
            })
            // on enregistre les lignes de commande
            Lignecommandefournisseurs.forEach(async (lignecommande) => {
                await Lignecommandefournisseur.create({
                    commandefournisseur: commandefournisseur.id,
                    quantite: +lignecommande.quantite,
                    prixtotal: lignecommande.prixtotal,
                    prixunitaire: lignecommande.prixunitaire,
                    stock: lignecommande.stock,
                })
            });

            const retour = await Commandefournisseur.findOne({
                where: {
                    id: commandefournisseur.id
                },
                include: commandefournisseurController.includeCommandefournisseur
            })

            res.status(201).send(retour)
        }
    } catch (error) {
         console.log(error, error.stack.split("\n"))
            res.status(500).send(error, error.stack.split("\n")) 
    }
}
    
 commandefournisseurController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Commandefournisseur.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: commandefournisseurController.includeCommandefournisseur,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 commandefournisseurController.update = async (req, res) => {
    try {
        const {
            id,
            fournisseur,
            magasin,
            adresse,
            Lignecommandefournisseurs,
            montant,
            soustotal,
            taxe,
            statut,
            total
        } = req.body

        if (Array.isArray(Lignecommandefournisseurs) && Lignecommandefournisseurs.length == 0) { // il n'y a pas de produit 
            req.status(402).send("La commande doit comporter au moins un produit")
        } else {

            // on met ajout les données de la commande
            console.log(id)
           await Commandefournisseur.update(
                {
                fournisseur: fournisseur,
                magasin: magasin,
                montant: montant,
                soustotal: soustotal,
                taxe: taxe,
                adresse: adresse,
                statut:statut
            }, {
                where:{
                    id:id
                }

            })
            // on supprime toutes les lignes de commandes
            await Lignecommandefournisseur.destroy({
                where:{
                    commandefournisseur: id
                }
            })
            // on enregistre les nouvelles lignes
            Lignecommandefournisseurs.forEach(async (lignecommande) => {
                await Lignecommandefournisseur.create({
                    commandefournisseur: id,
                    quantite: +lignecommande.quantite,
                    prixtotal: lignecommande.prixtotal,
                    prixunitaire: lignecommande.prixunitaire,
                    stock: lignecommande.stock,
                })
            });

            const retour = await Commandefournisseur.findOne({
                where: {
                    id: id
                },
                include: commandefournisseurController.includeCommandefournisseur
            })

            res.status(200).send(retour)
        }
    } catch (error) {
        console.log(error, error.stack.split("\n"))
           res.status(500).send(error.stack.split("\n")) 
    }

 }


 commandefournisseurController.updateStatut = async (req, res) => {

    const commandefournisseur = await Commandefournisseur.findOne({
        where:{
            id: req.params.id
        }
    })
    
    const lewhere = {}
    switch (req.body.statut) {
        case "Validée":
            lewhere.datevalidation = new Date()
            break;
            case "Annulée":
            lewhere.dateannulation = new Date()
            break;
            case "Facturée":
            lewhere.datefacturation = new Date()
            await commandefournisseurService.facturer(commandefournisseur)
            break;
            case "Livrée":
            lewhere.datelivraison = new Date()
            await commandefournisseurService.livrer(commandefournisseur)
            break;
    
        default:
            break;
    }
    
        try {
        await Commandefournisseur.update(
            {
            statut:req.body.statut,
            ...lewhere
        }, {
            where:{
                id: req.params.id
            }
    
        })
        const retour = await Commandefournisseur.findOne({
            where: {
                id: req.params.id
            },
            include: commandefournisseurController.includeCommandefournisseur
        })
    
        res.status(200).send(retour)
    }
     catch (err) {
    console.log(err)
    res.status(500).send(err.stack)
    }
    
    }

    
 commandefournisseurController.delete = async (req, res) => {
        try {
            const response = await Commandefournisseur.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Commandefournisseur supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 commandefournisseurController.getById = async (req, res) => {
        try {
            const response = await Commandefournisseur.findOne({
                where: { id: req.params.id },
                include: commandefournisseurController.includeCommandefournisseur
            })
            if (response == null) {
                res.status(404).send('Commandefournisseur non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 commandefournisseurController.getBy = async (req, res) => {
        try {
          const  response = await Commandefournisseur.findAndCountAll({
                where: req.body,
                include: commandefournisseurController.includeCommandefournisseur
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

   
commandefournisseurController.imprimer = async (req, res) => {
    //console.log("Impression de la commande "+req.body.id)
    // on recupère les details de la commande
    const commandefournisseur = await Commandefournisseur.findOne({
        where:{
            id: req.params.id
        },
        include: [
            Magasin, Fournisseur,
            {model:Lignecommandefournisseur, include:[{model:Stock, include:[Produit]}]}
        ]
    })
commandefournisseurService.genererCommandefournisseur(commandefournisseur, res)
}
    
    module.exports = commandefournisseurController
