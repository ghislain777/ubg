
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Souscategorie extends Model {
    static associate(models) {
    
    this.belongsTo(models.Categorie, {
        foreignKey: {
          name: 'categorie',
          field: 'categorie',
          allowNull: false
        }
      })
      models.Categorie.hasMany(this, {
        foreignKey: {
          name: 'categorie',
          field: 'categorie',
          allowNull: true
        }
      })
    


    }
  }
  Souscategorie.init({
    
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
          
          description: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Description'
            },
          

  }, {
    sequelize,
    modelName: 'Souscategorie',
    tableName: 'souscategorie',
    timestamps: false
  });
  return Souscategorie;
}
