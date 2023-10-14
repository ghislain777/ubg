
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lignefacture extends Model {
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
    
    this.belongsTo(models.Stock, {
        foreignKey: {
          name: 'stock',
          field: 'stock',
          allowNull: false
        }
      })
      models.Stock.hasMany(this, {
        foreignKey: {
          name: 'stock',
          field: 'stock',
          allowNull: true
        }
      })
    


    }
  }
  Lignefacture.init({
    
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID'
        },
      
          quantite: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Quantité?? ""'
            },
          
          prixunitaire: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Prix unitaire?? ""'
            },
          
          prixtotal: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Prix total?? ""'
            },
          
          remise: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Remise?? ""'
            },
          

  }, {
    sequelize,
    modelName: 'Lignefacture',
    tableName: 'lignefacture',
    timestamps: false
  });
  return Lignefacture;
}
