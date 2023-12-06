'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commande extends Model {
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

             // utilisateur
                this.belongsTo(models.Utilisateur, {
                      foreignKey: { name: 'utilisateur', field:"utilisateur", allowNull: true }
                  })
                  models.Utilisateur.hasMany(this, {
                      foreignKey: { name: "utilisateur", field: "utilisateur", allowNull: true }
                  })

    }
  }
  Commande.init({

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

    datecommande: {
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
    adresse: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: "Adresse de livraison"
    },
    soustotal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Sous total"
    },
    datevalidation: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'Date de validation'
    },
    datefacturation: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'Date de facturation'
    },
    datelivraison: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'Date de livraison'
    },
    dateannulation: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'date dannulation'
    },


  }, {
    sequelize,
    modelName: 'Commande',
    tableName: 'commande',
    timestamps: false
  });
  return Commande;
}