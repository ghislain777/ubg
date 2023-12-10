'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Versementcreance extends Model {

        static associate(models) {
            // creance
            this.belongsTo(models.Creance, {
                foreignKey: {
                    name: 'creance',
                    field: "creance",
                    allowNull: true
                }
            })
            models.Creance.hasMany(this, {
                foreignKey: {
                    name: "creance",
                    field: "creance",
                    allowNull: true
                }
            })


        }
    }
    Versementcreance.init({
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
        modelName: 'Versementcreance',
        tableName: "versementcreance",
        freezeTableName: true,
        timestamps: false
    });

    Versementcreance.afterCreate("hookAC", async (versementcreance, options) => {

        // on retrouve la creance à crediter
        const creance = await sequelize.models.Creance.findOne({
            where: {
                id: versementcreance.creance
            }
        })

        // on debite la caisse du magasin
        await sequelize.models.Mouvementdecaisse.create({
            caissemagasin: creance.caissemagasin,
            montant: versementcreance.montantverse,
            typedemouvement: "debit",
            motif: `Remboursement de la creance #${creance.id}`
        })

        // On debite le solde du client
        sequelize.models.Mouvementdecompteclient.create({
            client: creance.client,
            montant: versementcreance.montantverse,
            typedemouvement: "debit",
            motif: `remboursement de la creance #${creance.id}`
        })

        // on met à jour la creance pour indiquer le montant restant
        const restant = creance.montantrestant - versementcreance.montantverse
        await sequelize.models.Creance.update({
            montantrestant: restant,
            montantverse: creance.montantverse + versementcreance.montantverse,
            ferme:creance.montantrestant <= versementcreance.montantverse ? true : false
        }, {
            where: {
                id: creance.id
            }
        })
// on met aussi à jour le versement avec le reste à payer
await sequelize.models.Versementcreance.update({
    resteaverser: restant
}, {
    where: {
        id: versementcreance.id
    }
})


    })
    return Versementcreance;
};