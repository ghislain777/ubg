

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Depense, Magasin, Categoriededepense  } = require('../models');
    const depenseController = {}
    
 depenseController.includeDepense = [
    Magasin,Categoriededepense,]
 depenseController.add = async (req, res) => {
        try {
            const response = await Depense.create(req.body)
    
    const retour = await Depense.findOne({
        where:{
            id:response.id
        },
        include: depenseController.includeDepense
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 depenseController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Depense.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: depenseController.includeDepense,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 depenseController.update = async (req, res) => {
        try {
            const response = await Depense.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const depense = await Depense.findOne({
                where: { id: req.params.id },
                include: depenseController.includeDepense
            })
            res.status(200).send(depense)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 depenseController.delete = async (req, res) => {
        try {
            const response = await Depense.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Depense supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 depenseController.getById = async (req, res) => {
        try {
            const response = await Depense.findOne({
                where: { id: req.params.id },
                include: depenseController.includeDepense
            })
            if (response == null) {
                res.status(404).send('Depense non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 depenseController.getBy = async (req, res) => {
        try {
          const  response = await Depense.findAndCountAll({
                where: req.body,
                include: depenseController.includeDepense
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = depenseController
