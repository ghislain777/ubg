
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transfertstock extends Model {
    static associate(models) {

    this.belongsTo(models.Magasin, {
      as:'depart',
        foreignKey: {
          name: 'magasindepart',
          field: 'magasindepart',
          allowNull: false,
        },

      })
      models.Magasin.hasMany(this, {
        foreignKey: {
          name: 'magasindepart',
          field: 'magasindepart',
          allowNull: true
        }
      })

    this.belongsTo(models.Magasin, {
      as: 'arrivee',
        foreignKey: {
          name: 'magasinarrivee',
          field: 'magasinarrivee',
          allowNull: false
        }
      })
      models.Magasin.hasMany(this, {
        foreignKey: {
          name: 'magasinarrivee',
          field: 'magasinarrivee',
          allowNull: true
        }
      })



    }
  }
  Transfertstock.init({
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID'
        },

              datetransfert: {
                  type: DataTypes.DATE,
                  allowNull: true,
                  defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
                  comment: 'Date de transfert'
                },

          motif: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Motif de transfert'
            },

          statut: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "Nouveau",
              comment: 'Statut'
            },

          commentaire: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Commantaires'
            },

              datedexpedition: {
                  type: DataTypes.DATE,
                  allowNull: true,
                  comment: 'Date dexpedition'
                },

              datedereception: {
                  type: DataTypes.DATE,
                  allowNull: true,
                  comment: 'Date de reception'
                },


  }, {
    sequelize,
    modelName: 'Transfertstock',
    tableName: 'transfertstock',
    timestamps: false
  });
  return Transfertstock;
}
