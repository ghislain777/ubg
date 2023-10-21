
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mouvementdecompteclient extends Model {
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
    


    }
  }
  Mouvementdecompteclient.init({
    
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'ID'
        },
      
          motif: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: ''
            },
          
          montant: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Montant'
            },
          
          soldeapres: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
              comment: 'Solde après'
            },
          
              datemouvement: {
                  type: DataTypes.DATE,
                  allowNull: true,
                  defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
                  comment: 'Date du mouvement'
                },
              
          typedemouvement: {
              type: DataTypes.STRING,
              allowNull: true,
              defaultValue: "",
              comment: 'Type de mouvement'
            },
          

  }, {
    sequelize,
    modelName: 'Mouvementdecompteclient',
    tableName: 'mouvementdecompteclient',
    timestamps: false
  });


Mouvementdecompteclient.afterCreate("hookAC", async (mouvementdecompteclient, options) => {
    // On met à jour le compte du client à chaque nouveau mouvement

  const client = await sequelize.models.Client.findByPk(mouvementdecompteclient.client)
   
const nouveauSolde = mouvementdecompteclient.typedemouvement == "debit" 
? client.compte - mouvementdecompteclient.montant
: client.compte + mouvementdecompteclient.montant

await sequelize.models.Client.update({compte:nouveauSolde}, {where:{id:client.id}})
await sequelize.models.Mouvementdecompteclient.update({soldeapres:nouveauSolde}, {where:{id:mouvementdecompteclient.id}})  
 
  })

  return Mouvementdecompteclient;
}
