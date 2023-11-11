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
    Commande,
    Magasin,
    Lignecommande,
    Client,
    Stock,
    Produit
} = require('../models');
const { log } = require('winston');
const commandeService = require('../services/commande_service');
const commandeController = {}

commandeController.includeCommande = [
    Client, Lignecommande,Magasin
]


// ajout d'une nouvelle commande

commandeController.add = async (req, res) => {
    try {

        const {
            client,
            magasin,
            adresse,
            Lignecommandes,
            montant,
            soustotal,
            taxe,
            total
        } = req.body

        if (Lignecommandes.length === 0) { // il n'y a pas de produit 
            req.status(402).send("La commande doit comporter au moins un produit")
        } else {

            // on enregistre la commande du client
            const commande = await Commande.create({
                client: client,
                magasin: magasin,
                montant: montant,
                soustotal: soustotal,
                taxe: taxe,
                statut: "Nouveau",
                adresse: adresse
            })
            // on enregistre les lignes de commande
            Lignecommandes.forEach(async (lignecommande) => {
                await Lignecommande.create({
                    commande: commande.id,
                    quantite: +lignecommande.quantite,
                    prixtotal: lignecommande.prixtotal,
                    prixunitaire: lignecommande.prixunitaire,
                    stock: lignecommande.stock,
                    quantiteorigine:+lignecommande.quantiteorigine
                })
            });

            const retour = await Commande.findOne({
                where: {
                    id: commande.id
                },
                include: commandeController.includeCommande
            })

            res.status(201).send(retour)
        }
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

commandeController.getAll = async (req, res) => {
    let itemsPerPage = 30;
    let page = 1;
    itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
    page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {


        const resultat = await Commande.findAndCountAll({
            offset: (page - 1) * itemsPerPage,
            limit: itemsPerPage * 1,
            order: [
                ['id', 'desc']
            ],
            where: {
                ...parametresRequete

            },
            include: commandeController.includeCommande,
        })
        res.send(resultat)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}


// modification d'une commande

commandeController.update = async (req, res) => {
    try {

        const {
            id,
            client,
            magasin,
            adresse,
            Lignecommandes,
            montant,
            soustotal,
            taxe,
            statut,
            total
        } = req.body

        if (Array.isArray(Lignecommandes) && Lignecommandes.length == 0) { // il n'y a pas de produit 
            req.status(402).send("La commande doit comporter au moins un produit")
        } else {

            // on met ajout les données de la commande
           await Commande.update(
                {
                client: client,
                magasin: magasin,
                montant: montant,
                soustotal: soustotal,
                taxe: taxe,
                adresse: adresse,
                statut:statut
            }, {
                where:{
                    id: req.params.id
                }

            })
            // on supprime toutes les lignes de commandes
            await Lignecommande.destroy({
                where:{
                    commande: id
                }
            })
            // on enregistre les nouvelles lignes
            Lignecommandes.forEach(async (lignecommande) => {
                await Lignecommande.create({
                    commande: id,
                    quantite: +lignecommande.quantite,
                    prixtotal: lignecommande.prixtotal,
                    prixunitaire: lignecommande.prixunitaire,
                    stock: lignecommande.stock,
                })
            });

            const retour = await Commande.findOne({
                where: {
                    id: id
                },
                include: commandeController.includeCommande
            })

            res.status(200).send(retour)
        }
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

commandeController.delete = async (req, res) => {
    try {
        // on retrouve la commande associée
        const commande = await Commande.findOne({
            where: {
                id: req.params.id
            }
        })

        // on supprime d'abord toutes les  lignes associées à la commande 
        await Lignecommande.destroy({
            where: {
                commande: commande.id
            }
        })

        await Commande.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('Commande supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

commandeController.getById = async (req, res) => {
    try {
        const response = await Commande.findOne({
            where: {
                id: req.params.id
            },
            include: commandeController.includeCommande
        })
        if (response == null) {
            res.status(404).send('Commande non trouvé')
        } else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}

commandeController.getBy = async (req, res) => {
    try {
        const response = await Commande.findAndCountAll({
            where: req.body,
            include: commandeController.includeCommande
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}


commandeController.updateStatut = async (req, res) => {

const commande = await Commande.findOne({
    where:{
        id: req.params.id
    }
})

const lewhere = {}
switch (req.body.statut) {
    case "Validée":
        lewhere.datevalidation = new Date()
        break;
        case "Annulée":
        lewhere.dateannulation = new Date()
        break;
        case "Facturée":
        lewhere.datefacturation = new Date()
        await commandeService.facturer(commande)
        break;
        case "Livrée":
        lewhere.datelivraison = new Date()
        await commandeService.livrer(commande)
        break;

    default:
        break;
}

    try {
    await Commande.update(
        {
        statut:req.body.statut,
        ...lewhere
    }, {
        where:{
            id: req.params.id
        }

    })
    const retour = await Commande.findOne({
        where: {
            id: req.params.id
        },
        include: commandeController.includeCommande
    })

    res.status(200).send(retour)
}
 catch (err) {
console.log(err)
res.status(500).send(err.message)
}

}

commandeController.imprimer = async (req, res) => {
    console.log("Impression de la commande "+req.body.id)
    // on recupère les details de la commande
    const commande = await Commande.findOne({
        where:{
            id: req.params.id
        },
        include: [
            Client, Lignecommande,Magasin, Client,
            {model:Lignecommande, include:[{model:Stock, include:[Produit]}]}
        ]
    })
commandeService.genererCommande(commande, res)
}



// Génération du bon de livraison pour une commande.
commandeController.genererBondelivraison = async (req, res) => {
    const commande = await Commande.findOne({
        where:{
            id: req.params.id
        },
        include: [
            Client, Lignecommande,Magasin, Client,
            {model:Lignecommande, include:[{model:Stock, include:[Produit]}]}
        ]
    })

commandeService.genereBondelivraison(commande, res)


}
module.exports = commandeController