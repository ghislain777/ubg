

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Mouvementdecomptefournisseur, Fournisseur  } = require('../models');
    const mouvementdecomptefournisseurController = {}
    
 mouvementdecomptefournisseurController.includeMouvementdecomptefournisseur = [
    Fournisseur,]
 mouvementdecomptefournisseurController.add = async (req, res) => {
        try {
            const response = await Mouvementdecomptefournisseur.create(req.body)
    
    const retour = await Mouvementdecomptefournisseur.findOne({
        where:{
            id:response.id
        },
        include: mouvementdecomptefournisseurController.includeMouvementdecomptefournisseur
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 mouvementdecomptefournisseurController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Mouvementdecomptefournisseur.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: mouvementdecomptefournisseurController.includeMouvementdecomptefournisseur,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 mouvementdecomptefournisseurController.update = async (req, res) => {
        try {
            const response = await Mouvementdecomptefournisseur.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const mouvementdecomptefournisseur = await Mouvementdecomptefournisseur.findOne({
                where: { id: req.params.id },
                include: mouvementdecomptefournisseurController.includeMouvementdecomptefournisseur
            })
            res.status(200).send(mouvementdecomptefournisseur)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 mouvementdecomptefournisseurController.delete = async (req, res) => {
        try {
            const response = await Mouvementdecomptefournisseur.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Mouvementdecomptefournisseur supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 mouvementdecomptefournisseurController.getById = async (req, res) => {
        try {
            const response = await Mouvementdecomptefournisseur.findOne({
                where: { id: req.params.id },
                include: mouvementdecomptefournisseurController.includeMouvementdecomptefournisseur
            })
            if (response == null) {
                res.status(404).send('Mouvementdecomptefournisseur non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 mouvementdecomptefournisseurController.getBy = async (req, res) => {
        try {
          const  response = await Mouvementdecomptefournisseur.findAndCountAll({
                where: req.body,
                include: mouvementdecomptefournisseurController.includeMouvementdecomptefournisseur
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = mouvementdecomptefournisseurController
