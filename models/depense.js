
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Depense extends Model {
    static associate(models) {
    
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
    
    this.belongsTo(models.Categoriededepense, {
        foreignKey: {
          name: 'categoriededepense',
          field: 'categoriededepense',
          allowNull: false
        }
      })
      models.Categoriededepense.hasMany(this, {
        foreignKey: {
          name: 'categoriededepense',
          field: 'categoriededepense',
          allowNull: true
        }
      })
    


    }
  }
  Depense.init({
    
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID'
        },
      
              datededepense: {
                  type: DataTypes.DATE,
                  allowNull: true,
                  defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
                  comment: 'Date de la dépense'
                },
              
          montant: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Montant'
            },
          
          description: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Description'
            },
          

  }, {
    sequelize,
    modelName: 'Depense',
    tableName: 'depense',
    timestamps: false
  });

Depense.afterCreate("hookAC", async (depense, options) => {
    // on cree un mouvement de caisse après une depense

    // on retrouve la caisse

    const caisse = await sequelize.models.Caissemagasin.findOne({
      where:{
        magasin: depense.magasin
      }
    })

    await sequelize.models.Mouvementdecaisse.create({
      montant: depense.montant, 
      caissemagasin:caisse.id,
      typedemouvement:"debit", 
      motif: "Nouvelle dépande #"+depense.id
    })

  })

  return Depense;
}
