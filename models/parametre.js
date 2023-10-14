
'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parametre extends Model {
   
    static associate(models) {
              
    }
  }
  Parametre.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment:'ID'
    },
    nom: {
            type: DataTypes.STRING,
      allowNull: false,
      defaultValue:'',
      comment:'Nom'
    },
    valeur: {
            type: DataTypes.STRING,
      allowNull: false,
      defaultValue:'',
      comment:'Valeur'
    },
    description: {
            type: DataTypes.STRING,
      allowNull: false,
      defaultValue:'',
      comment:'Description'
    },
    
  }, {
    sequelize,modelName: 'Parametre',
    tableName:'parametre',
    timestamps:false
}); 
return Parametre;
}