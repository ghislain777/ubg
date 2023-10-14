

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Modedepayement } = require('../models');
    const modedepayementController = {}
    
 modedepayementController.includeModedepayement = []
 modedepayementController.add = async (req, res) => {
        try {
            const response = await Modedepayement.create(req.body)
    
    const retour = await Modedepayement.findOne({
        where:{
            id:response.id
        },
        include: modedepayementController.includeModedepayement
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 modedepayementController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Modedepayement.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: modedepayementController.includeModedepayement,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 modedepayementController.update = async (req, res) => {
        try {
            const response = await Modedepayement.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const modedepayement = await Modedepayement.findOne({
                where: { id: req.params.id },
                include: modedepayementController.includeModedepayement
            })
            res.status(200).send(modedepayement)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 modedepayementController.delete = async (req, res) => {
        try {
            const response = await Modedepayement.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Modedepayement supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 modedepayementController.getById = async (req, res) => {
        try {
            const response = await Modedepayement.findOne({
                where: { id: req.params.id },
                include: modedepayementController.includeModedepayement
            })
            if (response == null) {
                res.status(404).send('Modedepayement non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 modedepayementController.getBy = async (req, res) => {
        try {
          const  response = await Modedepayement.findAndCountAll({
                where: req.body,
                include: modedepayementController.includeModedepayement
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = modedepayementController
