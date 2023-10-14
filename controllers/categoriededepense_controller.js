

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Categoriededepense  } = require('../models');
    const categoriededepenseController = {}
    
 categoriededepenseController.includeCategoriededepense = [
    ]
 categoriededepenseController.add = async (req, res) => {
        try {
            const response = await Categoriededepense.create(req.body)
    
    const retour = await Categoriededepense.findOne({
        where:{
            id:response.id
        },
        include: categoriededepenseController.includeCategoriededepense
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 categoriededepenseController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Categoriededepense.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: categoriededepenseController.includeCategoriededepense,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 categoriededepenseController.update = async (req, res) => {
        try {
            const response = await Categoriededepense.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const categoriededepense = await Categoriededepense.findOne({
                where: { id: req.params.id },
                include: categoriededepenseController.includeCategoriededepense
            })
            res.status(200).send(categoriededepense)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 categoriededepenseController.delete = async (req, res) => {
        try {
            const response = await Categoriededepense.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Categoriededepense supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 categoriededepenseController.getById = async (req, res) => {
        try {
            const response = await Categoriededepense.findOne({
                where: { id: req.params.id },
                include: categoriededepenseController.includeCategoriededepense
            })
            if (response == null) {
                res.status(404).send('Categoriededepense non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 categoriededepenseController.getBy = async (req, res) => {
        try {
          const  response = await Categoriededepense.findAndCountAll({
                where: req.body,
                include: categoriededepenseController.includeCategoriededepense
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = categoriededepenseController
