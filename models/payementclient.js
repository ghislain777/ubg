
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payementclient extends Model {
    static associate(models) {
    
    this.belongsTo(models.Facture, {
        foreignKey: {
          name: 'facture',
          field: 'facture',
          allowNull: false
        }
      })
      models.Facture.hasMany(this, {
        foreignKey: {
          name: 'facture',
          field: 'facture',
          allowNull: true
        }
      })
    


    }
  }
  Payementclient.init({
    
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID'
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
          
          soldeapres: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Solde après'
            },
          

  }, {
    sequelize,
    modelName: 'Payementclient',
    tableName: 'payementclient',
    timestamps: false
  });
  return Payementclient;
}
