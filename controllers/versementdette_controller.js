

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Versementdette, Dette, Client  } = require('../models');
    const versementdetteController = {}
    
 versementdetteController.includeVersementdette = [
    {model:Dette, include:[Client]},]
 versementdetteController.add = async (req, res) => {
        try {
            const response = await Versementdette.create(req.body)
    
    const retour = await Versementdette.findOne({
        where:{
            id:response.id
        },
        include: versementdetteController.includeVersementdette
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 versementdetteController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Versementdette.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: versementdetteController.includeVersementdette,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 versementdetteController.update = async (req, res) => {
        try {
            const response = await Versementdette.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const versementdette = await Versementdette.findOne({
                where: { id: req.params.id },
                include: versementdetteController.includeVersementdette
            })
            res.status(200).send(versementdette)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 versementdetteController.delete = async (req, res) => {
        try {
            const response = await Versementdette.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Versementdette supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 versementdetteController.getById = async (req, res) => {
        try {
            const response = await Versementdette.findOne({
                where: { id: req.params.id },
                include: versementdetteController.includeVersementdette
            })
            if (response == null) {
                res.status(404).send('Versementdette non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 versementdetteController.getBy = async (req, res) => {
        try {
          const  response = await Versementdette.findAndCountAll({
                where: req.body,
                include: versementdetteController.includeVersementdette
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = versementdetteController
