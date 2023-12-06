'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Facture extends Model {
    static associate(models) {

      this.belongsTo(models.Modedepayement, {
        foreignKey: {
          name: 'modedepayement',
          field: 'modedepayement',
          allowNull: false
        }
      })
      models.Modedepayement.hasMany(this, {
        foreignKey: {
          name: 'modedepayement',
          field: 'modedepayement',
          allowNull: true
        }
      })

      this.belongsTo(models.Commande, {
        foreignKey: {
          name: 'commande',
          field: 'commande',
          allowNull: false
        }
      })
      models.Commande.hasMany(this, {
        foreignKey: {
          name: 'commande',
          field: 'commande',
          allowNull: true
        }
      })

      // magasin
      this.belongsTo(models.Magasin, {
        foreignKey: {
          name: 'magasin',
          field: "magasin",
          allowNull: true
        }
      })
      models.Magasin.hasMany(this, {
        foreignKey: {
          name: "magasin",
          field: "magasin",
          allowNull: true
        }
      })

      // client
      this.belongsTo(models.Client, {
        foreignKey: {
          name: 'client',
          field: "client",
          allowNull: true
        }
      })
      models.Client.hasMany(this, {
        foreignKey: {
          name: "client",
          field: "client",
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
  Facture.init({

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment: 'ID'
    },

    datefacture: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: 'Date de la facture'
    },

    datepayement: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'Date de payement'
    },
    soustotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: 'Sous total'
    },

    montant: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: 'Montant'
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
      comment: 'Validité en jours'
    },

    statut: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
      comment: 'Statut'
    },

    payementcomplet: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
      comment: 'Payement complet'
    },

    montantpaye: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: 'Montant payé'
    },

    resteapayer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: 'Reste à payer'
    },

    etat: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
      comment: 'Etat'
    },


  }, {
    sequelize,
    modelName: 'Facture',
    tableName: 'facture',
    timestamps: false
  });
  return Facture;
}