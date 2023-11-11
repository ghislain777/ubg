'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vente extends Model {
    static associate(models) {

      this.belongsTo(models.Client, {
        foreignKey: {
          name: 'client',
          field: 'client',
          allowNull: false
        }
      })
      models.Client.hasMany(this, {
        foreignKey: {
          name: 'client',
          field: 'client',
          allowNull: true
        }
      })

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

    }
  }
  Vente.init({

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment: 'ID'
    },

    nom: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
      comment: 'Nom'
    },

    datevente: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: 'Date'
    },

    montant: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: 'Montant'
    },

    remise: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: 'Remise'
    },

    montantremise: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: 'Montant remisé'
    },

    taxe: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
      comment: 'Taxe'
    },

    validite: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: 'Validité'
    },

    statut: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Nouveau",
      comment: 'Statut'
    },
    
    soustotal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Sous total"
    },
    
    dateannulation: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'date dannulation'
    },


  }, {
    sequelize,
    modelName: 'Vente',
    tableName: 'vente',
    timestamps: false
  });
  return Vente;
}