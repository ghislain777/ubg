

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Versementcreance, Creance, Client } = require('../models');
    const versementcreanceController = {}
    
 versementcreanceController.includeVersementcreance = [
    {model:Creance, include:[Client]},]
 versementcreanceController.add = async (req, res) => {
        try {
            const response = await Versementcreance.create(req.body)
    
    const retour = await Versementcreance.findOne({
        where:{
            id:response.id
        },
        include: versementcreanceController.includeVersementcreance
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 versementcreanceController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Versementcreance.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: versementcreanceController.includeVersementcreance,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 versementcreanceController.update = async (req, res) => {
        try {
            const response = await Versementcreance.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const versementcreance = await Versementcreance.findOne({
                where: { id: req.params.id },
                include: versementcreanceController.includeVersementcreance
            })
            res.status(200).send(versementcreance)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 versementcreanceController.delete = async (req, res) => {
        try {
            const response = await Versementcreance.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Versementcreance supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 versementcreanceController.getById = async (req, res) => {
        try {
            const response = await Versementcreance.findOne({
                where: { id: req.params.id },
                include: versementcreanceController.includeVersementcreance
            })
            if (response == null) {
                res.status(404).send('Versementcreance non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 versementcreanceController.getBy = async (req, res) => {
        try {
          const  response = await Versementcreance.findAndCountAll({
                where: req.body,
                include: versementcreanceController.includeVersementcreance
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = versementcreanceController
