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
    Vente,
    Client,
    Magasin,
    Lignevente,
    Stock,
    Produit,
    Utilisateur
} = require('../models');
const venteService = require('../services/vente_service');
const venteController = {}

venteController.includeVente = [
    Client, Magasin, {
        model: Lignevente,
        include: [{
            model: Stock,
            include: [{
                model: Produit,
                include: ["Origine"]
            }]
        },
    
    ]
    },Utilisateur
]
venteController.add = async (req, res) => {

    try {

        const {
            client,
            magasin,
            Ligneventes,
            montant,
            soustotal,
            taxe,
            total,
            utilisateur
        } = req.body

        if (Ligneventes.length === 0) { // il n'y a pas de produit 
            req.status(402).send("La vente doit comporter au moins un produit")
        } else {

            // on enregistre la vente du client
            const vente = await Vente.create({
                client: client,
                magasin: magasin,
                montant: montant,
                soustotal: soustotal,
                taxe: taxe,
                statut: "Nouveau",
                utilisateur:utilisateur
            })
            // on enregistre les lignes de ventes

            for (var i = 0, len = Ligneventes.length; i < len; i++) {
                const lignevente = Ligneventes[i]

                await Lignevente.create({
                    vente: vente.id,
                    quantite: +lignevente.quantite,
                    prixtotal: lignevente.prixtotal,
                    prixunitaire: lignevente.prixunitaire,
                    stock: lignevente.stock,
                    quantiteorigine: +lignevente.quantiteorigine
                })
            };


            const lavente = await Vente.findOne({
                where: {
                    id: vente.id
                },
                include: venteController.includeVente
            })
            venteService.vendre(lavente).then(() => {
                res.status(201).send(lavente)
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }

}


venteController.getAll = async (req, res) => {
    let itemsPerPage = 30;
    let page = 1;
    itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
    page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {

        const resultat = await Vente.findAndCountAll({
            offset: (page - 1) * itemsPerPage,
            limit: itemsPerPage * 1,
            order: [
                ['id', 'desc']
            ],
            where: {
                ...parametresRequete

            },
            include: venteController.includeVente,
        })
        res.send(resultat)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

venteController.update = async (req, res) => {
    try {
        const response = await Vente.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const vente = await Vente.findOne({
            where: {
                id: req.params.id
            },
            include: venteController.includeVente
        })
        res.status(200).send(vente)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

venteController.delete = async (req, res) => {
    try {
        const response = await Vente.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('Vente supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

venteController.getById = async (req, res) => {
    try {
        const response = await Vente.findOne({
            where: {
                id: req.params.id
            },
            include: venteController.includeVente
        })
        if (response == null) {
            res.status(404).send('Vente non trouvé')
        } else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


venteController.getBy = async (req, res) => {
    try {
        const response = await Vente.findAndCountAll({
            where: req.body,
            include: venteController.includeVente
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

venteController.imprimerVente = async (req, res) => {

    const vente = await Vente.findOne({
        where: {
            id: req.params.id
        },
        include: [{
                model: Lignevente,
                include: [{
                    model: Stock,
                    include: [{
                        model: Produit,
                        
                    }, ]
                }]
            },
            {
                model: Client,
            },
            Utilisateur
        ]
    })

    venteService.imprimer(vente, res)
    // res.send("facture générée")
}

venteController.updateStatut = async (req, res) => {

    try {
          const vente = await Vente.findOne({
        where: {
            id: req.params.id
        },
        include: venteController.includeVente
    })

    console.log(vente.Ligneventes[1].Stock.Produit)

    if(vente.statut == "Nouveau" && req.body.statut === "Annulée") {

        await venteService.annuler(vente)
        await Vente.update({statut:"Annulée"}, {where: {id:req.params.id}})
        res.send(vente)
    } else {
        res.status(402).send("Impossile d'effectuer l'opération")
    }
    } catch (error) {

        res.status(500).send(error.message)
    }
  
    


}


module.exports = venteController