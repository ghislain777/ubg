

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Stock, Magasin, Produit  } = require('../models');
    const stockController = {}
    
 stockController.includeStock = [
    Magasin,{model:Produit, include:["Origine"]},]
 stockController.add = async (req, res) => {
        try {
            const response = await Stock.create(req.body)
    
    const retour = await Stock.findOne({
        where:{
            id:response.id
        },
        include: stockController.includeStock
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 stockController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Stock.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: stockController.includeStock,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 stockController.update = async (req, res) => {
        try {
            const response = await Stock.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const stock = await Stock.findOne({
                where: { id: req.params.id },
                include: stockController.includeStock
            })
            res.status(200).send(stock)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 stockController.delete = async (req, res) => {
        try {
            const response = await Stock.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Stock supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 stockController.getById = async (req, res) => {
        try {
            const response = await Stock.findOne({
                where: { id: req.params.id },
                include: stockController.includeStock
            })
            if (response == null) {
                res.status(404).send('Stock non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 stockController.getBy = async (req, res) => {
        try {
          const  response = await Stock.findAndCountAll({
                where: req.body,
                include: stockController.includeStock
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = stockController
