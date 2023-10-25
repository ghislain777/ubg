'use strict';

const {
  Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Magasin extends Model {

    static associate(models) {
      this.belongsTo(models.Commune, {
        foreignKey: {
          name: 'commune',
          field: 'commune',
          allowNull: false
        }
      })
      models.Commune.hasMany(this, {
        foreignKey: {
          name: 'commune',
          field: 'commune',
          allowNull: true
        }
      })

    }
  }
  Magasin.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment: 'ID'
    },
    adresse: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      comment: 'Adresse'
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      comment: 'Nom'
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      comment: 'Telephone'
    },
    peutvendre: {
          type:DataTypes.STRING,
          allowNull:true,
          defaultValue: true,
          comment: "Peut vendre?"
        },

  }, {
    sequelize,
    modelName: 'Magasin',
    tableName: 'magasin',
    timestamps: false
  });

Magasin.afterCreate("hookAC", async (magasin, options) => {
    // on cree la caisse por le nouveau pagasin
    await sequelize.models.Caissemagasin.create({
      magasin: magasin.id,
      sole: 0
    })
    // on cree le stock pour tous les produis

  const produits = await sequelize.models.Produit.findAll()

produits.forEach(async produit => {
 await sequelize.models.Stock.create({
  produit: produit.id, 
  magasin:magasin.id,
  quantiteenstock:0,
  prixdedetail:0,
  prixdedemigros:0,
  prixdegros:0,
  actif: true,
  quantitededemisgros:1,
  quantitedegros:1
  })  
});

  })


  return Magasin;
}