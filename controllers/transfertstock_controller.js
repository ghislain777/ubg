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
    Transfertstock,
    Magasin,
    Lignetransfert,
    Stock,
    Mouvementdestock,
    Produit
} = require('../models');
const transfertstockService = require('../services/transfertstock_service');
const transfertstockController = {}

transfertstockController.includeTransfertstock = [
    'depart', 'arrivee', Lignetransfert
]
transfertstockController.add = async (req, res) => {
    try {

        const {
            motif,
            magasindepart,
            magasindestination,
            Lignetransferts
        } = req.body

        // on enregistre le nouveau transfert



        const transfert = await Transfertstock.create({
            magasindepart: +magasindepart,
            magasinarrivee: +magasindestination,
            motif: motif
        })

        for (var i = 0; i < Lignetransferts.length; i++) {
            // on recherche le stock associé au magasin et au produi
            await Lignetransfert.create({
                transfertstock: transfert.id,
                quantite: +Lignetransferts[i].quantite,
                produit: +Lignetransferts[i].produit
            })
        };

        const retour = await Transfertstock.findOne({
            where: {
                id: transfert.id
            },
            include: transfertstockController.includeTransfertstock
        })

        res.status(201).send(retour)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

transfertstockController.getAll = async (req, res) => {
    let itemsPerPage = 30;
    let page = 1;
    itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
    page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {


        const resultat = await Transfertstock.findAndCountAll({
            offset: (page - 1) * itemsPerPage,
            limit: itemsPerPage * 1,
            order: [
                ['id', 'desc']
            ],
            where: {
                ...parametresRequete

            },
            include: transfertstockController.includeTransfertstock,
        })
        res.send(resultat)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

// Mise à jour d'un transfert de stock.
transfertstockController.update = async (req, res) => {
    try {
        const transfert = await Transfertstock.findOne({
            where: {
                id: req.params.id
            }
        })
        const response = await Transfertstock.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        if (transfert.statut != req.body.statut) { // il y a eu changement de statut

            const lesLignetransfert = await Lignetransfert.findAll({
                where: {
                    transfertstock: transfert.id
                }
            })


            switch (req.body.statut) {
                case "Expédié":

                // on update de transfert de la date d'expédition
               await  Transfertstock.update({datedexpedition: new Date()}, {
                    where:{
                        id:transfert.id
                    }
                })



                    // on fait le debit correspondant à chaque ligne de transfert

                    for (var i = 0; i < lesLignetransfert.length; i++) {
                        const ligne = lesLignetransfert[i]
                        // on retrouve le stock
                        const stock = await Stock.findOne({
                            where: {
                                magasin: transfert.magasindepart,
                                produit: ligne.produit
                            }
                        })
                        // on débite le stock (on fait une sortie de stock)
                        await Mouvementdestock.create({
                            stock: stock.id,
                            quantite: ligne.quantite,
                            typedemouvement: "sortie",
                            motif: `Expédition du transfert de stock #${transfert.id}`
                        })
                    };
                    break;
                case "Réceptionné":
                    // on met à jour la date de reception
                    await  Transfertstock.update({datedereception: new Date()}, {
                        where:{
                            id:transfert.id
                        }
                    })
                    // on fait le credit correspondant à chaque ligne de transfert

                    for (var i = 0; i < lesLignetransfert.length; i++) {
                        const ligne = lesLignetransfert[i]
                        // on retrouve le stock
                        const stock = await Stock.findOne({
                            where: {
                                magasin: transfert.magasinarrivee,
                                produit: ligne.produit
                            }
                        })
                        // on débite le stock (on fait une sortie de stock)
                        await Mouvementdestock.create({
                            stock: stock.id,
                            quantite: ligne.quantite,
                            typedemouvement: "entree",
                            motif: `Réception du transfert de stock #${transfert.id}`
                        })
                    };
                    break;
                default:
                    // default code
            };
        }

        const transfertstock = await Transfertstock.findOne({
            where: {
                id: req.params.id
            },
            include: transfertstockController.includeTransfertstock
        })
        res.status(200).send(transfertstock)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

transfertstockController.delete = async (req, res) => {
    try {
        const response = await Transfertstock.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('Transfertstock supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

transfertstockController.getById = async (req, res) => {
    try {
        const response = await Transfertstock.findOne({
            where: {
                id: req.params.id
            },
            include: transfertstockController.includeTransfertstock
        })
        if (response == null) {
            res.status(404).send('Transfertstock non trouvé')
        } else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


transfertstockController.getBy = async (req, res) => {
    try {
        const response = await Transfertstock.findAndCountAll({
            where: req.body,
            include: transfertstockController.includeTransfertstock
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}


transfertstockController.bondexpedition = async (req, res) => {
    const transfertstock = await Transfertstock.findOne({
        where: {
            id: req.params.id
        },
        include: [
            'depart', 'arrivee', {
                model: Lignetransfert,
                include: [Produit]
            }
        ]
    })
    transfertstockService.bondexpedition(transfertstock, res)

}

transfertstockController.bondereception = async (req, res) => {
    const transfertstock = await Transfertstock.findOne({
        where: {
            id: req.params.id
        },
        include: [
            'depart', 'arrivee', {
                model: Lignetransfert,
                include: [Produit]
            }
        ]
    })

    console.log(transfertstock)
    
    transfertstockService.bondereception(transfertstock, res)

}


module.exports = transfertstockController