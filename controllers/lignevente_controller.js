

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Lignevente, Vente, Stock  } = require('../models');
    const ligneventeController = {}
    
 ligneventeController.includeLignevente = [
    Vente,Stock,]
 ligneventeController.add = async (req, res) => {
        try {
            const response = await Lignevente.create(req.body)
    
    const retour = await Lignevente.findOne({
        where:{
            id:response.id
        },
        include: ligneventeController.includeLignevente
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 ligneventeController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Lignevente.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: ligneventeController.includeLignevente,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 ligneventeController.update = async (req, res) => {
        try {
            const response = await Lignevente.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const lignevente = await Lignevente.findOne({
                where: { id: req.params.id },
                include: ligneventeController.includeLignevente
            })
            res.status(200).send(lignevente)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 ligneventeController.delete = async (req, res) => {
        try {
            const response = await Lignevente.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Lignevente supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 ligneventeController.getById = async (req, res) => {
        try {
            const response = await Lignevente.findOne({
                where: { id: req.params.id },
                include: ligneventeController.includeLignevente
            })
            if (response == null) {
                res.status(404).send('Lignevente non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 ligneventeController.getBy = async (req, res) => {
        try {
          const  response = await Lignevente.findAndCountAll({
                where: req.body,
                include: ligneventeController.includeLignevente
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = ligneventeController
