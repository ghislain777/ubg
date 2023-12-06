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
    Mouvementdecaisse,
    Caissemagasin,
    Magasin
} = require('../models');
const mouvementdecaisseController = {}

mouvementdecaisseController.includeMouvementdecaisse = [
    {model:Caissemagasin, include:[Magasin]},

]
mouvementdecaisseController.add = async (req, res) => {
    try {
        const response = await Mouvementdecaisse.create({
            ...req.body,
            datemouvement: new Date()
        })

        const retour = await Mouvementdecaisse.findOne({
            where: {
                id: response.id
            },
            include: mouvementdecaisseController.includeMouvementdecaisse
        })

        res.status(201).send(retour)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

mouvementdecaisseController.getAll = async (req, res) => {
    let itemsPerPage = 30;
    let page = 1;
    itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
    page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    let parametresRequete = fonctions.removePaginationkeys(parametres)
  const magasin = req.query.magasin
  console.log("Le magasin")
  console.log(magasin)
  let linclude = []
  if(typeof magasin !="undefined") { // on a envoyé le magasin
parametresRequete = delete parametresRequete['magasin']
linclude = [
{
    model: Caissemagasin,
    where:{magasin:magasin},
    include:[
        {
    model: Magasin
}
    ]
},

]

  }
  else {
    linclude = mouvementdecaisseController.includeMouvementdecaisse
  }
    try {


        const resultat = await Mouvementdecaisse.findAndCountAll({
            offset: (page - 1) * itemsPerPage,
            limit: itemsPerPage * 1,
            order: [
                ['id', 'desc']
            ],
            where: {
                ...parametresRequete

            },
            include: linclude,
        })
        res.send(resultat)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

mouvementdecaisseController.update = async (req, res) => {
    try {
        const response = await Mouvementdecaisse.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const mouvementdecaisse = await Mouvementdecaisse.findOne({
            where: {
                id: req.params.id
            },
            include: mouvementdecaisseController.includeMouvementdecaisse
        })
        res.status(200).send(mouvementdecaisse)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

mouvementdecaisseController.delete = async (req, res) => {
    try {
        const response = await Mouvementdecaisse.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('Mouvementdecaisse supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

mouvementdecaisseController.getById = async (req, res) => {
    try {
        const response = await Mouvementdecaisse.findOne({
            where: {
                id: req.params.id
            },
            include: mouvementdecaisseController.includeMouvementdecaisse
        })
        if (response == null) {
            res.status(404).send('Mouvementdecaisse non trouvé')
        } else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


mouvementdecaisseController.getBy = async (req, res) => {
    try {
        const response = await Mouvementdecaisse.findAndCountAll({
            where: req.body,
            include: mouvementdecaisseController.includeMouvementdecaisse
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}


module.exports = mouvementdecaisseController