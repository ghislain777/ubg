

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Creance, Client, Caissemagasin, Magasin, Versementcreance  } = require('../models');
    const creanceController = {}
    
 creanceController.includeCreance = [
    Client,{model:Caissemagasin, include:[Magasin]},]
 creanceController.add = async (req, res) => {
        try {
            const response = await Creance.create({...req.body, montantrestant: req.body.montant})
    
    const retour = await Creance.findOne({
        where:{
            id:response.id
        },
        include: creanceController.includeCreance
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 creanceController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Creance.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: creanceController.includeCreance,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 creanceController.update = async (req, res) => {
        try {
            const response = await Creance.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const creance = await Creance.findOne({
                where: { id: req.params.id },
                include: creanceController.includeCreance
            })
            res.status(200).send(creance)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 creanceController.delete = async (req, res) => {
        try {
            const response = await Creance.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Creance supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 creanceController.getById = async (req, res) => {
        try {
            const response = await Creance.findOne({
                where: { id: req.params.id },
                include: creanceController.includeCreance
            })
            if (response == null) {
                res.status(404).send('Creance non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 creanceController.getBy = async (req, res) => {
        try {
          const  response = await Creance.findAndCountAll({
                where: req.body,
                include: creanceController.includeCreance
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
 creanceController.versement = async (req, res) => {

    try {
        const versementcreance = await Versementcreance.create({
            montantverse:+req.body.montantverse,
            creance: req.params.id,         
        })
        
        res.send(versementcreance)
    } catch (error) {
         console.log(error, error.stack.split("\n"))
            res.status(500).send(error.stack.split("\n")) 
    }
       
 }

    module.exports = creanceController
