

const {
    format
  } = require("date-fns");
    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Payementclient, Facture,Client  } = require('../models');
const payementService = require('../services/payement_service');
    const payementclientController = {}
    
 payementclientController.includePayementclient = [
    {model:Facture, include:[Client]},]
 payementclientController.add = async (req, res) => {
        try {
            const response = await Payementclient.create(req.body)
    
    const retour = await Payementclient.findOne({
        where:{
            id:response.id
        },
        include: payementclientController.includePayementclient
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 payementclientController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Payementclient.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: payementclientController.includePayementclient,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 payementclientController.update = async (req, res) => {
        try {
            const response = await Payementclient.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const payementclient = await Payementclient.findOne({
                where: { id: req.params.id },
                include: payementclientController.includePayementclient
            })
            res.status(200).send(payementclient)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 payementclientController.delete = async (req, res) => {
        try {
            const response = await Payementclient.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Payementclient supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 payementclientController.getById = async (req, res) => {
        try {
            const response = await Payementclient.findOne({
                where: { id: req.params.id },
                include: payementclientController.includePayementclient
            })
            if (response == null) {
                res.status(404).send('Payementclient non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 payementclientController.getBy = async (req, res) => {
        try {
          const  response = await Payementclient.findAndCountAll({
                where: req.body,
                include: payementclientController.includePayementclient
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }


    payementclientController.recudepayement = async (req, res) => {
        const payementclient = await Payementclient.findOne({
            where: { id: req.params.id },
            include: [
                {model:Facture, include:[Client]}
            ]
        })
        payementService.genererRecu(payementclient, res)
    }

    module.exports = payementclientController
