
const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Payementfournisseur, Facturefournisseur, Magasin, Fournisseur  } = require('../models');
    const payementfournisseurController = {}
    
 payementfournisseurController.includePayementfournisseur = [
    {model: Facturefournisseur, include:[Fournisseur, Magasin]}]
 payementfournisseurController.add = async (req, res) => {
        try {
            const response = await Payementfournisseur.create(req.body)
    
    const retour = await Payementfournisseur.findOne({
        where:{
            id:response.id
        },
        include: payementfournisseurController.includePayementfournisseur
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 payementfournisseurController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Payementfournisseur.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: payementfournisseurController.includePayementfournisseur,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 payementfournisseurController.update = async (req, res) => {
        try {
            const response = await Payementfournisseur.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const payementfournisseur = await Payementfournisseur.findOne({
                where: { id: req.params.id },
                include: payementfournisseurController.includePayementfournisseur
            })
            res.status(200).send(payementfournisseur)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 payementfournisseurController.delete = async (req, res) => {
        try {
            const response = await Payementfournisseur.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Payementfournisseur supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 payementfournisseurController.getById = async (req, res) => {
        try {
            const response = await Payementfournisseur.findOne({
                where: { id: req.params.id },
                include: payementfournisseurController.includePayementfournisseur
            })
            if (response == null) {
                res.status(404).send('Payementfournisseur non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 payementfournisseurController.getBy = async (req, res) => {
        try {
          const  response = await Payementfournisseur.findAndCountAll({
                where: req.body,
                include: payementfournisseurController.includePayementfournisseur
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = payementfournisseurController
