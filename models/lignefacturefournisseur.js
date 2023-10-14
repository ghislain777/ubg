
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lignefacturefournisseur extends Model {
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
  Lignefacturefournisseur.init({
    
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
          
          prixunitaire: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Prix unitaire'
            },
          
          prixtotal: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Prix total'
            },
          
          remise: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Remise'
            },
          

  }, {
    sequelize,
    modelName: 'Lignefacturefournisseur',
    tableName: 'lignefacturefournisseur',
    timestamps: false
  });
  return Lignefacturefournisseur;
}
