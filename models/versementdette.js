'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Versementdette extends Model {

        static associate(models) {
            // dette
            this.belongsTo(models.Dette, {
                foreignKey: {
                    name: 'dette',
                    field: "dette",
                    allowNull: true
                }
            })
            models.Dette.hasMany(this, {
                foreignKey: {
                    name: "dette",
                    field: "dette",
                    allowNull: true
                }
            })


        }
    }
    Versementdette.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: "ID"
        },

        montantverse: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            comment: "Montant versé"
        },
        dateversement: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            comment: 'Date versement'
        },

        resteaverser: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            comment: "Reste à verser"
        },


        description: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: 'Description'
        },
    }, {
        sequelize,
        modelName: 'Versementdette',
        tableName: "versementdette",
        freezeTableName: true,
        timestamps: false
    });


    Versementdette.afterCreate("hookAC", async (versementdette, options) => {

        // on retrouve la dette à crediter
        const dette = await sequelize.models.Dette.findOne({
            where: {
                id: versementdette.dette
            }
        })
        //console.log(dette)
        // on credite la caisse du magasin
        await sequelize.models.Mouvementdecaisse.create({
            caissemagasin: dette.caissemagasin,
            montant: versementdette.montantverse,
            typedemouvement: "credit",
            motif: `Remboursement de la dette #${dette.id}`
        })

        // On credite le solde du client
        sequelize.models.Mouvementdecompteclient.create({
            client: dette.client,
            montant: versementdette.montantverse,
            typedemouvement: "credit",
            motif: `remboursement de la dette #${dette.id}`
        })

        // on met à jour la dette pour indiquer le montant restant
        const restant = dette.montantrestant - versementdette.montantverse
        dette.montantrestant - versementdette.montantverse
        await sequelize.models.Dette.update({
            montantrestant: restant,
            montantverse: dette.montantverse + versementdette.montantverse,
            ferme: dette.montantrestant <= versementdette.montantverse ? true : false
        }, {
            where: {
                id: dette.id
            }
        })
        // on met aussi à jour le versement avec le reste à payer
        await sequelize.models.Versementdette.update({
            resteaverser: restant
        }, {
            where: {
                id: versementdette.id
            }
        })


    })

    return Versementdette;
};