'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dette extends Model {
    
    static associate(models) {
            // client
               this.belongsTo(models.Client, {
                     foreignKey: { name: 'client', field:"client", allowNull: true }
                 })
                 models.Client.hasMany(this, {
                     foreignKey: { name: "client", field: "client", allowNull: true }
                 })

           // caissemagasin
              this.belongsTo(models.Caissemagasin, {
                    foreignKey: { name: 'caissemagasin', field:"caissemagasin", allowNull: true }
                })
                models.Caissemagasin.hasMany(this, {
                    foreignKey: { name: "caissemagasin", field: "caissemagasin", allowNull: true }
                })

     
    }
  }
  Dette.init({
    id: {
          type:DataTypes.INTEGER,
          autoIncrement:true, 
          primaryKey: true,
          comment:"ID"
        },
    montant: {
      type:DataTypes.INTEGER,
      allowNull:false,
      comment:"Montant"
    },
     datedette: {
          type:DataTypes.DATE,
          allowNull:false,
          defaultValue:sequelize.literal('CURRENT_TIMESTAMP'),
          comment:'Date de la dette'
        },
        montantverse: {
              type:DataTypes.INTEGER,
              allowNull:false,
              defaultValue: 0,
              comment: "Montant versé"
            },
             montantrestant: {
                   type:DataTypes.INTEGER,
                   allowNull:false,
                   defaultValue: 0,
                   comment: "montant restant"
                 },
                 ferme: {
                       type:DataTypes.BOOLEAN,
                       allowNull:false,
                       defaultValue: false,
                       comment: "Fermé?"
                     },
    description: {
      type:DataTypes.STRING,
      allowNull:true,
      comment:'Description'
    },
  }, {
    sequelize,
    modelName: 'Dette',
    tableName:"dette",
    freezeTableName:true,
    timestamps:false
  });

Dette.afterCreate("hookAC", async (dette, options) => {
    // on debite la caisse du magasin
  await sequelize.models.Mouvementdecaisse.create({
    caissemagasin:dette.caissemagasin,
    montant:+dette.montant,
    typedemouvement:"debit",
    motif:`Nouvelle dette #${dette.id}`
  })

  // On debite le solde du client
sequelize.models.Mouvementdecompteclient.create({
  client:dette.client,
  montant:+dette.montant,
  typedemouvement:"debit",
  motif:`Nouvelle dette #${dette.id}`
})

   // await sequelize.models.Prixlivraison.create({
    //  montant: 0,
    //  dette: dette.id,
    //  description: `prix pour les commandes de la dette:: ${dette.nom}`
   // })
  })

  return Dette;
};