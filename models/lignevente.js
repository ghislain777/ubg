
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lignevente extends Model {
    static associate(models) {
    
    this.belongsTo(models.Vente, {
        foreignKey: {
          name: 'vente',
          field: 'vente',
          allowNull: false
        }
      })
      models.Vente.hasMany(this, {
        foreignKey: {
          name: 'vente',
          field: 'vente',
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
  Lignevente.init({
    
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID'
        },
      
          quantite: {
              type: DataTypes.FLOAT,
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
            quantiteorigine: {
                  type:DataTypes.FLOAT,
                  allowNull:true,
                  comment: "Quantite produit origine"
                },
          

  }, {
    sequelize,
    modelName: 'Lignevente',
    tableName: 'lignevente',
    timestamps: false
  });
  return Lignevente;
}
