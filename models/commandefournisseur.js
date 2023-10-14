
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commandefournisseur extends Model {
    static associate(models) {
    
    this.belongsTo(models.Fournisseur, {
        foreignKey: {
          name: 'fournisseur',
          field: 'fournisseur',
          allowNull: false
        }
      })
      models.Fournisseur.hasMany(this, {
        foreignKey: {
          name: 'fournisseur',
          field: 'fournisseur',
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
  Commandefournisseur.init({
    
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
                  comment: 'Date de la commande'
                },
              
          montant: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Montant?? ""'
            },
          
          remise: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Remise?? ""'
            },
          
          montantremise: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Montant remisé?? ""'
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
              comment: 'Validité?? ""'
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
            adresse: {
                  type:DataTypes.STRING,
                  allowNull:false,
                  defaultValue: "",
                  comment: "Adresse"
                },
               

  }, {
    sequelize,
    modelName: 'Commandefournisseur',
    tableName: 'commandefournisseur',
    timestamps: false
  });
  return Commandefournisseur;
}
