
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lignetransfert extends Model {
    static associate(models) {
    
    this.belongsTo(models.Transfertstock, {
        foreignKey: {
          name: 'transfertstock',
          field: 'transfertstock',
          allowNull: false
        }
      })
      models.Transfertstock.hasMany(this, {
        foreignKey: {
          name: 'transfertstock',
          field: 'transfertstock',
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
  Lignetransfert.init({
    
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
              comment: 'Quantité'
            },
          

  }, {
    sequelize,
    modelName: 'Lignetransfert',
    tableName: 'lignetransfert',
    timestamps: false
  });
  return Lignetransfert;
}
