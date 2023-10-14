
'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mouvementdestock extends Model {
   
    static associate(models) {
        this.belongsTo(models.Stock, {foreignKey:{ name:'stock', field:'stock', allowNull:false}})
models.Stock.hasMany(this, {
        foreignKey: {
          name: 'stock',
          field: 'stock',
          allowNull: true
        }
      })
      
    }
  }
  Mouvementdestock.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment:'ID'
    },
    datemouvement: {
            type: DataTypes.DATE,
      allowNull: false,
      defaultValue:sequelize.literal('CURRENT_TIMESTAMP'),
      comment:'Datemouvement'
    },
    quantite:{
            type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:0,
      comment:'Quantite'
    },
    motif: {
            type: DataTypes.STRING,
      allowNull: false,
      defaultValue:'',
      comment:'Motif'
    },
    commentaire: {
            type: DataTypes.STRING,
      allowNull: false,
      defaultValue:'',
      comment:'Commentaire'
    },
    typedemouvement: {
            type: DataTypes.STRING,
      allowNull: false,
      defaultValue:'',
      comment:'Typedemouvement'
    },
    quantiteapres:{
            type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:0,
      comment:'Quantiteapres'
    },
    
  }, {
    sequelize,modelName: 'Mouvementdestock',
    tableName:'mouvementdestock',
    timestamps:false
}); 

Mouvementdestock.afterCreate("hookAC", async (mouvement, options) => {
// on met a jour les quantités
  const stock = await sequelize.models.Stock.findOne({
    where:{
      id: mouvement.stock
    }
  })
  const nouvelleQuantite = mouvement.typedemouvement == "entree"? mouvement.quantite + stock.quantiteenstock : stock.quantiteenstock - mouvement.quantite
  
  await sequelize.models.Stock.update({quantiteenstock: nouvelleQuantite}, {
    where:{
      id: stock.id
    }
  })
  await sequelize.models.Mouvementdestock.update({quantiteapres:nouvelleQuantite}, {
    where:{
      id:mouvement.id
    }
  })
    })
 
return Mouvementdestock;
}