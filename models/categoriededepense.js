
'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoriededepense extends Model {
   
    static associate(models) {
              
    }
  }
  Categoriededepense.init({
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
    description: {
            type: DataTypes.STRING,
      allowNull: false,
      defaultValue:'',
      comment:'Description'
    },
    
  }, {
    sequelize,modelName: 'Categoriededepense',
    tableName:'categoriededepense',
    timestamps:false
}); 
return Categoriededepense;
}