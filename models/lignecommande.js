
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lignecommande extends Model {
    static associate(models) {
    
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
  Lignecommande.init({
    
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
            quantiteorigine: {
                  type:DataTypes.FLOAT,
                  allowNull:true,
                  comment: "Quantite produit origine"
                },
          

  }, {
    sequelize,
    modelName: 'Lignecommande',
    tableName: 'lignecommande',
    timestamps: false
  });
  return Lignecommande;
}
