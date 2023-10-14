
'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
   
    static associate(models) {
              
    }
  }
  Menu.init({
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
    icone: {
            type: DataTypes.STRING,
      allowNull: false,
      defaultValue:'',
      comment:'Icone'
    },
    
  }, {
    sequelize,modelName: 'Menu',
    tableName:'menu',
    timestamps:false
}); 
return Menu;
}