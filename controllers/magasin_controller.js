

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Magasin, Commune  } = require('../models');
    const magasinController = {}
    
 magasinController.includeMagasin = [
    Commune,]
 magasinController.add = async (req, res) => {
        try {
            const response = await Magasin.create(req.body)
    
    const retour = await Magasin.findOne({
        where:{
            id:response.id
        },
        include: magasinController.includeMagasin
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 magasinController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Magasin.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: magasinController.includeMagasin,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 magasinController.update = async (req, res) => {
        try {
            const response = await Magasin.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const magasin = await Magasin.findOne({
                where: { id: req.params.id },
                include: magasinController.includeMagasin
            })
            res.status(200).send(magasin)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 magasinController.delete = async (req, res) => {
        try {
            const response = await Magasin.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Magasin supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 magasinController.getById = async (req, res) => {
        try {
            const response = await Magasin.findOne({
                where: { id: req.params.id },
                include: magasinController.includeMagasin
            })
            if (response == null) {
                res.status(404).send('Magasin non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 magasinController.getBy = async (req, res) => {
        try {
          const  response = await Magasin.findAndCountAll({
                where: req.body,
                include: magasinController.includeMagasin
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = magasinController
