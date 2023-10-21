

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Mouvementdecompteclient, Client  } = require('../models');
    const mouvementdecompteclientController = {}
    
 mouvementdecompteclientController.includeMouvementdecompteclient = [
    Client,]
 mouvementdecompteclientController.add = async (req, res) => {
        try {
            const response = await Mouvementdecompteclient.create(req.body)
    
    const retour = await Mouvementdecompteclient.findOne({
        where:{
            id:response.id
        },
        include: mouvementdecompteclientController.includeMouvementdecompteclient
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 mouvementdecompteclientController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Mouvementdecompteclient.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: mouvementdecompteclientController.includeMouvementdecompteclient,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 mouvementdecompteclientController.update = async (req, res) => {
        try {
            const response = await Mouvementdecompteclient.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const mouvementdecompteclient = await Mouvementdecompteclient.findOne({
                where: { id: req.params.id },
                include: mouvementdecompteclientController.includeMouvementdecompteclient
            })
            res.status(200).send(mouvementdecompteclient)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 mouvementdecompteclientController.delete = async (req, res) => {
        try {
            const response = await Mouvementdecompteclient.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Mouvementdecompteclient supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 mouvementdecompteclientController.getById = async (req, res) => {
        try {
            const response = await Mouvementdecompteclient.findOne({
                where: { id: req.params.id },
                include: mouvementdecompteclientController.includeMouvementdecompteclient
            })
            if (response == null) {
                res.status(404).send('Mouvementdecompteclient non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 mouvementdecompteclientController.getBy = async (req, res) => {
        try {
          const  response = await Mouvementdecompteclient.findAndCountAll({
                where: req.body,
                include: mouvementdecompteclientController.includeMouvementdecompteclient
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = mouvementdecompteclientController
