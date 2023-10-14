'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {

    static associate(models) {
      this.belongsTo(models.Magasin, {
        foreignKey: {
          name: 'magasin',
          field: 'magasin',
          allowNull: false
        }
      })
      models.Magasin.hasMany(this, {
        foreignKey: {
          name: 'magasin',
          field: 'magasin',
          allowNull: true
        }
      })
      this.belongsTo(models.Produit, {
        foreignKey: {
          name: 'produit',
          field: 'produit',
          allowNull: false
        }
      })
      models.Produit.hasMany(this, {
        foreignKey: {
          name: 'produit',
          field: 'produit',
          allowNull: true
        }
      })

    }
  }
  Stock.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment: 'ID'
    },
    quantiteenstock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: 'Quantiteenstock'
    },
    prixdedetail: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: 'Prixdedetail'
    },
    prixdedemigros: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: 'Prixdedemigros'
    },
    prixdegros: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: 'Prixdegros'
    },
    actif: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: 'Actif'
    },
    quantitededemisgros: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: 'Quantitededemisgros'
    },
    quantitedegros: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: 'Quantitedegros'
    },
    prixdachat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: 'Prix dachat'
    },

  }, {
    sequelize,
    modelName: 'Stock',
    tableName: 'stock',
    timestamps: false
  });
  return Stock;
}