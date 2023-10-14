
'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Caissemagasin extends Model {
   
    static associate(models) {
        this.belongsTo(models.Magasin, {foreignKey:{ name:'magasin', field:'magasin', allowNull:false}})
models.Magasin.hasMany(this, {
        foreignKey: {
          name: 'magasin',
          field: 'magasin',
          allowNull: true
        }
      })
      
    }
  }
  Caissemagasin.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment:'ID'
    },
    solde:{
            type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:0,
      comment:'Solde'
    },
    
  }, {
    sequelize,modelName: 'Caissemagasin',
    tableName:'caissemagasin',
    timestamps:false
}); 
return Caissemagasin;
}