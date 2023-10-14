
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Modedepayement extends Model {
    static associate(models) {
    


    }
  }
  Modedepayement.init({
    
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
    modelName: 'Modedepayement',
    tableName: 'modedepayement',
    timestamps: false
  });
  return Modedepayement;
}
