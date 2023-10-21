

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Client, Commune, Mouvementdecompteclient  } = require('../models');
    const clientController = {}
    
 clientController.includeClient = [
    Commune,]
 clientController.add = async (req, res) => {
        try {
            const response = await Client.create(req.body)
    
    const retour = await Client.findOne({
        where:{
            id:response.id
        },
        include: clientController.includeClient
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 clientController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Client.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: clientController.includeClient,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 clientController.update = async (req, res) => {
        try {
            const response = await Client.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const client = await Client.findOne({
                where: { id: req.params.id },
                include: clientController.includeClient
            })
            res.status(200).send(client)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 clientController.delete = async (req, res) => {
        try {
            const response = await Client.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Client supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 clientController.getById = async (req, res) => {
        try {
            const response = await Client.findOne({
                where: { id: req.params.id },
                include: clientController.includeClient
            })
            if (response == null) {
                res.status(404).send('Client non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 clientController.getBy = async (req, res) => {
        try {
          const  response = await Client.findAndCountAll({
                where: req.body,
                include: clientController.includeClient
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    clientController.mouvementdecompte = async (req, res) => {


        try {
            const {typedemouvement, montant, motif} = req.body   
        const   response = await Mouvementdecompteclient.create({
                typedemouvement: typedemouvement,
                motif:motif,
                montant:montant,
                client:req.params.id
            })
            res.send(response)
        } catch (error) {
             console.log(error, error.stack.split("\n"))
                res.status(500).send(error.stack.split("\n"))        
        }
            

    }

    
    module.exports = clientController
