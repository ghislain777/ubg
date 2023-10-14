
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lignecommandefournisseur extends Model {
    static associate(models) {
    
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
  Lignecommandefournisseur.init({
    
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
              comment: 'Quantite'
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
    modelName: 'Lignecommandefournisseur',
    tableName: 'lignecommandefournisseur',
    timestamps: false
  });
  return Lignecommandefournisseur;
}
