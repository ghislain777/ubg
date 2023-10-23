'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Utilisateur extends Model {

    static associate(models) {
      this.belongsTo(models.Role, {
        foreignKey: {
          name: 'role',
          field: 'role',
          allowNull: false
        }
      })
      models.Role.hasMany(this, {
        foreignKey: {
          name: 'role',
          field: 'role',
          allowNull: true
        }
      })
      this.belongsTo(models.Magasin, {
        foreignKey: {
          name: 'magasin',
          field: 'magasin',
          allowNull: false
        }
      })
      models.Magasin.hasMany(this, {
        foreignKey: {
          name: 'magasin',
          field: 'magasin',
          allowNull: true
        }
      })

    }
  }
  Utilisateur.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment: 'ID'
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      comment: 'Nom'
    },
    motdepasse: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      comment: 'Motdepasse'
    },
    actif: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: 'Actif'
    },
    datecreation: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: 'Datecreation'
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      comment: 'Prenom'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      comment: 'Email'
    },
    civilite: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'M.',
      comment: 'Civilite'
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      comment: 'Telephone'
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      comment: 'Login'
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      comment: 'Photo'
    },

  }, {
    sequelize,
    modelName: 'Utilisateur',
    tableName: 'utilisateur',
    timestamps: false
  });
  return Utilisateur;
}