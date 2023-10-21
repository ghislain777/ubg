
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mouvementdecomptefournisseur extends Model {
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
    }
  }
  Mouvementdecomptefournisseur.init({
    
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID'
        },
      
          motif: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: ''
            },
          
              datemouvement: {
                  type: DataTypes.DATE,
                  allowNull: true,
                  defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
                  comment: 'Date du mouvement'
                },
              
          montant: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Montant'
            },
          
          typedemouvement: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Type de mouvement'
            },
          
          soldeapres: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Solde après'
            },
          

  }, {
    sequelize,
    modelName: 'Mouvementdecomptefournisseur',
    tableName: 'mouvementdecomptefournisseur',
    timestamps: false
  });

  Mouvementdecomptefournisseur.afterCreate("hookAC", async (mouvementdecoptefournisseur, options) => {
      // on met à jour le compte du foirnisseur après un mouvement
const fournisseur = await sequelize.models.Fournisseur.findByPk(mouvementdecoptefournisseur.fournisseur)

const nouveauSolde = mouvementdecoptefournisseur.typedemouvement == "debit" 
   ? fournisseur.compte - mouvementdecoptefournisseur.montant
   : fournisseur.compte + mouvementdecoptefournisseur.montant

   await sequelize.models.Fournisseur.update({compte:nouveauSolde}, {where:{id:fournisseur.id}})
   await sequelize.models.Mouvementdecomptefournisseur.update({soldeapres: nouveauSolde}, {where:{id:mouvementdecoptefournisseur.id}})

    })

  return Mouvementdecomptefournisseur;
}
