
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
    
    this.belongsTo(models.Commune, {
        foreignKey: {
          name: 'commune',
          field: 'commune',
          allowNull: false
        }
      })
      models.Commune.hasMany(this, {
        foreignKey: {
          name: 'commune',
          field: 'commune',
          allowNull: true
        }
      })
    


    }
  }
  Client.init({
    
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
          
          prenom: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Prenom'
            },
          
          photo: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Photo'
            },
          
              actif: {
                  type: DataTypes.BOOLEAN,
                  allowNull: true,
                  defaultValue: true,
                  comment: 'Actif'
                },
              
              creele: {
                  type: DataTypes.DATE,
                  allowNull: true,
                  defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
                  comment: 'Cree le'
                },
              
          statut: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "Client normal",
              comment: 'Statut'
            },
          
          telephone: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Téléphone'
            },
          
          telephone2: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Téléphone 2'
            },
          
          email: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Email'
            },
          
              estsociete: {
                  type: DataTypes.BOOLEAN,
                  allowNull: true,
                  defaultValue: true,
                  comment: 'Est société'
                },
              
          contact: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Contact'
            },
            adresse: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Adresse'
            },
          
          compte: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Compte'
            },
          

  }, {
    sequelize,
    modelName: 'Client',
    tableName: 'client',
    timestamps: false
  });
  return Client;
}
