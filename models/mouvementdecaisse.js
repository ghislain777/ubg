
'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mouvementdecaisse extends Model {
   
    static associate(models) {
        this.belongsTo(models.Caissemagasin, {foreignKey:{ name:'caissemagasin', field:'caissemagasin', allowNull:false}})
models.Caissemagasin.hasMany(this, {
        foreignKey: {
          name: 'caissemagasin',
          field: 'caissemagasin',
          allowNull: true
        }
      })
      
    }
  }
  Mouvementdecaisse.init({
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
    typedemouvement: {
            type: DataTypes.STRING,
      allowNull: false,
      defaultValue:'',
      comment:'Typedemouvement'
    },
    montant:{
            type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:0,
      comment:'Montant'
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
    soldeapres:{
            type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:0,
      comment:'Soldeapres'
    },
    
  }, {
    sequelize,modelName: 'Mouvementdecaisse',
    tableName:'mouvementdecaisse',
    timestamps:false
}); 

Mouvementdecaisse.afterCreate("hookAC", async (mouvement, options) => {
    // on met à jour le solde après chaque mouvement
const caisse = await sequelize.models.Caissemagasin.findOne({
  where:{
    id: mouvement.caissemagasin
  }
})
const nouveauSolde = mouvement.typedemouvement == "credit"? mouvement.montant + caisse.solde : caisse.solde - mouvement.montant

await sequelize.models.Caissemagasin.update({solde: nouveauSolde}, {
  where:{
    id: caisse.id
  }
})
await sequelize.models.Mouvementdecaisse.update({soldeapres:nouveauSolde}, {
  where:{
    id:mouvement.id
  }
})
  })
return Mouvementdecaisse;
}