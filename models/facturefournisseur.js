
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Facturefournisseur extends Model {
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
    
    this.belongsTo(models.Commandefournisseur, {
        foreignKey: {
          name: 'commandefournisseur',
          field: 'commandefournisseur',
          allowNull: false
        }
      })
      models.Commandefournisseur.hasMany(this, {
        foreignKey: {
          name: 'commandefournisseur',
          field: 'commandefournisseur',
          allowNull: true
        }
      })

             // fournisseur
                this.belongsTo(models.Fournisseur, {
                      foreignKey: { name: 'fournisseur', field:"fournisseur", allowNull: true }
                  })
                  models.Fournisseur.hasMany(this, {
                      foreignKey: { name: "fournisseur", field: "fournisseur", allowNull: true }
                  })

                         // magasin
                            this.belongsTo(models.Magasin, {
                                  foreignKey: { name: 'magasin', field:"magasin", allowNull: true }
                              })
                              models.Magasin.hasMany(this, {
                                  foreignKey: { name: "magasin", field: "magasin", allowNull: true }
                              })


    }
  }
  Facturefournisseur.init({
    
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
                  comment: 'Date facture'
                },
              
              datepayement: {
                  type: DataTypes.DATE,
                  allowNull: true,
                  defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
                  comment: 'Date de payement'
                },
              
          montant: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Montant'
            },
            soustotal: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Sous total'
            },
          
          taxe: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
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
          
          fichier: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Fichier'
            },
          

  }, {
    sequelize,
    modelName: 'Facturefournisseur',
    tableName: 'facturefournisseur',
    timestamps: false
  });
  return Facturefournisseur;
}
