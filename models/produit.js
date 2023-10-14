
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produit extends Model {
    static associate(models) {
    
    this.belongsTo(models.Souscategorie, {
        foreignKey: {
          name: 'souscategorie',
          field: 'souscategorie',
          allowNull: false
        }
      })
      models.Souscategorie.hasMany(this, {
        foreignKey: {
          name: 'souscategorie',
          field: 'souscategorie',
          allowNull: true
        }
      })
    


    }
  }
  Produit.init({
    
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID'
        },
      
          nom: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Nom'
            },
          
          photo: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Photo principale'
            },
          
          photo1: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Photo 1'
            },
          
          photo2: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Photo 2'
            },
          
          conditionnement: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Conditionnement'
            },
          
          prixdachat: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Prix dachat?? ""'
            },
          

  }, {
    sequelize,
    modelName: 'Produit',
    tableName: 'produit',
    timestamps: false
  });
  return Produit;
}
