
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adresse extends Model {
    static associate(models) {
    
    this.belongsTo(models.Client, {
        foreignKey: {
          name: 'client',
          field: 'client',
          allowNull: false
        }
      })
      models.Client.hasMany(this, {
        foreignKey: {
          name: 'client',
          field: 'client',
          allowNull: true
        }
      })
    
    this.belongsTo(models.Fournisseur, {
        foreignKey: {
          name: 'fournisseur',
          field: 'fournisseur',
          allowNull: false
        }
      })
      models.Fournisseur.hasMany(this, {
        foreignKey: {
          name: 'fournisseur',
          field: 'fournisseur',
          allowNull: true
        }
      })
    


    }
  }
  Adresse.init({
    
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
          
          telephone: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Téléphone'
            },
          
          email: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Email'
            },
          
          siteweb: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Site web'
            },
          
          ligneadresse1: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Adresse ligne 1'
            },
          
          ligneadresse2: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Adresse ligne 2'
            },
          
              estprincipale: {
                  type: DataTypes.BOOLEAN,
                  allowNull: true,
                  defaultValue: true,
                  comment: 'Est principale?'
                },
              

  }, {
    sequelize,
    modelName: 'Adresse',
    tableName: 'adresse',
    timestamps: false
  });
  return Adresse;
}
