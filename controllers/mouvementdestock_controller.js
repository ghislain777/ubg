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
    Mouvementdestock,
    Stock,
    Produit,
    Magasin
} = require('../models');
const mouvementdestockController = {}

mouvementdestockController.includeMouvementdestock = [{
    model: Stock,
    include: [{
        model: Produit
    }, {
        model: Magasin
    }]
}]
mouvementdestockController.add = async (req, res) => {
    try {
        const response = await Mouvementdestock.create({...req.body, datemouvement: new Date()})

        const retour = await Mouvementdestock.findOne({
            where: {
                id: response.id
            },
            include: mouvementdestockController.includeMouvementdestock
        })

        res.status(201).send(retour)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

mouvementdestockController.getAll = async (req, res) => {
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
    model: Stock,
    where:{magasin:magasin},
    include:[
        {
    model: Produit
}, {
    model: Magasin
}
    ]
},

]

  }
  else {
    linclude = mouvementdestockController.includeMouvementdestock
  }
    
    try {

        const resultat = await Mouvementdestock.findAndCountAll({
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

mouvementdestockController.update = async (req, res) => {
    try {
        const response = await Mouvementdestock.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const mouvementdestock = await Mouvementdestock.findOne({
            where: {
                id: req.params.id
            },
            include: mouvementdestockController.includeMouvementdestock
        })
        res.status(200).send(mouvementdestock)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

mouvementdestockController.delete = async (req, res) => {
    try {
        const response = await Mouvementdestock.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('Mouvementdestock supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

mouvementdestockController.getById = async (req, res) => {
    try {
        const response = await Mouvementdestock.findOne({
            where: {
                id: req.params.id
            },
            include: mouvementdestockController.includeMouvementdestock
        })
        if (response == null) {
            res.status(404).send('Mouvementdestock non trouvé')
        } else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


mouvementdestockController.getBy = async (req, res) => {
    try {
        const response = await Mouvementdestock.findAndCountAll({
            where: req.body,
            include: mouvementdestockController.includeMouvementdestock
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}


module.exports = mouvementdestockController