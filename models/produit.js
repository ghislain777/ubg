
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produit extends Model {
    static associate(models) {
    
    this.belongsTo(models.Souscategorie, {
        foreignKey: {
          name: 'souscategorie',
          field: 'souscategorie',
          allowNull: false
        }
      })
      models.Souscategorie.hasMany(this, {
        foreignKey: {
          name: 'souscategorie',
          field: 'souscategorie',
          allowNull: true
        }
      })
            
             // produitdorigine/produitdetache
                this.belongsTo(models.Produit, {
                  as:"Origine",
                      foreignKey: { name: 'produitdorigine', field:"produitdorigine", allowNull: true }
                  })
                  

                 
                 
    


    }
  }
  Produit.init({
    
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
          
          photo: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Photo principale'
            },
          
          photo1: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Photo 1'
            },
          
          photo2: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Photo 2'
            },
          
          conditionnement: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Conditionnement'
            },
          
          prixdachat: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Prix dachat?? ""'
            },
          

  }, {
    sequelize,
    modelName: 'Produit',
    tableName: 'produit',
    timestamps: false
  });

//TODO on cree le stock dans tous les magasin a chaque creation de prosuit

Produit.afterCreate("hookAC", async (produit, options) => {

// on recupere la liste des magasins
const magasins = await sequelize.models.Magasin.findAll()

// on cree le stock pour ce produit dans chacun de ces magasins
// on cree le stock pour tous les produis


magasins.forEach(async magasin => {
 await sequelize.models.Stock.create({
  produit: produit.id, 
  magasin:magasin.id,
  quantiteenstock:0,
  prixdedetail:0,
  prixdedemigros:0,
  prixdegros:0,
  actif: false,
  quantitededemisgros:5,
  quantitedegros:10
  })  
});
  })

  return Produit;
}
