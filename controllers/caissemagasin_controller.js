

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Caissemagasin, Magasin  } = require('../models');
    const caissemagasinController = {}
    
 caissemagasinController.includeCaissemagasin = [
    Magasin,]
 caissemagasinController.add = async (req, res) => {
        try {
            const response = await Caissemagasin.create(req.body)
    
    const retour = await Caissemagasin.findOne({
        where:{
            id:response.id
        },
        include: caissemagasinController.includeCaissemagasin
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 caissemagasinController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Caissemagasin.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: caissemagasinController.includeCaissemagasin,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 caissemagasinController.update = async (req, res) => {
        try {
            const response = await Caissemagasin.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const caissemagasin = await Caissemagasin.findOne({
                where: { id: req.params.id },
                include: caissemagasinController.includeCaissemagasin
            })
            res.status(200).send(caissemagasin)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 caissemagasinController.delete = async (req, res) => {
        try {
            const response = await Caissemagasin.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Caissemagasin supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 caissemagasinController.getById = async (req, res) => {
        try {
            const response = await Caissemagasin.findOne({
                where: { id: req.params.id },
                include: caissemagasinController.includeCaissemagasin
            })
            if (response == null) {
                res.status(404).send('Caissemagasin non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 caissemagasinController.getBy = async (req, res) => {
        try {
          const  response = await Caissemagasin.findAndCountAll({
                where: req.body,
                include: caissemagasinController.includeCaissemagasin
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = caissemagasinController
