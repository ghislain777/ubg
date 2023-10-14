
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payementfournisseur extends Model {
    static associate(models) {
    
    this.belongsTo(models.Facturefournisseur, {
        foreignKey: {
          name: 'facturefournisseur',
          field: 'facturefournisseur',
          allowNull: false
        }
      })
      models.Facturefournisseur.hasMany(this, {
        foreignKey: {
          name: 'facturefournisseur',
          field: 'facturefournisseur',
          allowNull: true
        }
      })
    


    }
  }
  Payementfournisseur.init({
    
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID'
        },
      
              datedepayement: {
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
          
          soldeapres: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Solde après'
            },
          

  }, {
    sequelize,
    modelName: 'Payementfournisseur',
    tableName: 'payementfournisseur',
    timestamps: false
  });
  return Payementfournisseur;
}
