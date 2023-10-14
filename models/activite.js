
'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activite extends Model {
   
    static associate(models) {
        this.belongsTo(models.Menu, {foreignKey:{ name:'menu', field:'menu', allowNull:false}})
models.Menu.hasMany(this, {
        foreignKey: {
          name: 'menu',
          field: 'menu',
          allowNull: true
        }
      })
      
    }
  }
  Activite.init({
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
    chemain: {
            type: DataTypes.STRING,
      allowNull: false,
      defaultValue:'',
      comment:'Chemain'
    },
    icone: {
            type: DataTypes.STRING,
      allowNull: false,
      defaultValue:'',
      comment:'Icone'
    },
    
  }, {
    sequelize,modelName: 'Activite',
    tableName:'activite',
    timestamps:false
}); 
return Activite;
}