const {
    response,
    request
} = require('express');
const {
    where
} = require('sequelize');
const {
    Sequelize,
    Op
} = require('sequelize');
const fonctions = require('../fonctions');
const {
    Dette,
    Client,
    Caissemagasin,
    Magasin,
    Versementdette
} = require('../models');
const detteController = {}

detteController.includeDette = [
    Client, {model:Caissemagasin, include:[Magasin]},
]
detteController.add = async (req, res) => {
    try {
        const response = await Dette.create({...req.body, montantrestant:req.body.montant})

        const retour = await Dette.findOne({
            where: {
                id: response.id
            },
            include: detteController.includeDette
        })

        res.status(201).send(retour)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

detteController.getAll = async (req, res) => {
    let itemsPerPage = 30;
    let page = 1;
    itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
    page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {


        const resultat = await Dette.findAndCountAll({
            offset: (page - 1) * itemsPerPage,
            limit: itemsPerPage * 1,
            order: [
                ['id', 'desc']
            ],
            where: {
                ...parametresRequete

            },
            include: detteController.includeDette,
        })
        res.send(resultat)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

detteController.update = async (req, res) => {
    try {
        const response = await Dette.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const dette = await Dette.findOne({
            where: {
                id: req.params.id
            },
            include: detteController.includeDette
        })
        res.status(200).send(dette)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

detteController.delete = async (req, res) => {
    try {
        const response = await Dette.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('Dette supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

detteController.getById = async (req, res) => {
    try {
        const response = await Dette.findOne({
            where: {
                id: req.params.id
            },
            include: detteController.includeDette
        })
        if (response == null) {
            res.status(404).send('Dette non trouvé')
        } else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


detteController.getBy = async (req, res) => {
    try {
        const response = await Dette.findAndCountAll({
            where: req.body,
            include: detteController.includeDette
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}


detteController.versement = async (req, res) => {
    try {
        const versementdette = await Versementdette.create({
            montantverse:+req.body.montantverse,
            dette: req.params.id,         
        })
        
        res.send(versementdette)
    } catch (error) {
         console.log(error, error.stack.split("\n"))
            res.status(500).send(error.stack.split("\n")) 
    }
}


module.exports = detteController