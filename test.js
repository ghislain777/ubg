const { QueryTypes, Sequelize } = require('sequelize');
const { sequelize } = require('./models');
String.prototype.ucfirst = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const table = 'utilisateur'
const model = table.ucfirst()
//const clesEtrangeres = ['${nom}']
sequelize.query(`SHOW FULL COLUMNS FROM ${table}`, { type: QueryTypes.SELECT }).then(colones=> {
  const contenuFichierModel = getModel(colones)
  console.log(contenuFichierModel)
})


const getModel = (colones) => {
let lescolones = colones

let contenuFichier = `
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ${model} extends Model {
    `
lescolones.forEach(colone => {
    if(colone.Key == 'MUL') {
        contenuFichier+= renduCleEtrangere(colone.Field)
    }
})
   contenuFichier+= `


    }
  }
  ${model}.init({
    `
    lescolones.forEach(colone => {
        contenuFichier+= renduColone(colone)
    })
   contenuFichier+= `

  }, {
    sequelize,
    modelName: '${model}',
    tableName: '${table}',
    timestamps: false
  });
  return ${model};
}
`

return contenuFichier
}

const renduColone = (colone)=> {
    const letype = colone.Type.split('(')[0]
    //console.log(colone)
    const nom = colone.Field
    const commentaire = colone.Comment
    if(colone.Key == "PRI") {
        return `
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'ID'
          },
        `
        console.log(`${colone.Field} >> clé primaire`)
    }
    if(colone.Key == "MUL") {
        return ``
    //console.log(`${colone.Field} >> clé étrangère`)
    }
    if(!["PRI", "MUL"].includes(colone.Key)) {
      //  console.log(`${colone.Field} >> champs normal`)

    switch(letype) {
        case 'int':
            return `
            ${nom}: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
                comment: '${commentaire}?? ""'
              },
            `
            break;
        case 'varchar':
            return `
            ${nom}: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
                comment: '${commentaire}'
              },
            `
            break;
            case 'tinyint':
                return `
                ${nom}: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                    defaultValue: true,
                    comment: '${commentaire}'
                  },
                `
            break;
            case 'date':
                return `
                ${nom}: {
                    type: DataTypes.DATE,
                    allowNull: true,
                    defaultValue: sequelize.literal('CURRENT_TIMESTAMP)
                    comment: '${commentaire}'
                  },
                `
            break;
            case 'datetime':
                return `
                ${nom}: {
                    type: DataTypes.DATE,
                    allowNull: true,
                    defaultValue: sequelize.literal('CURRENT_TIMESTAMP)
                    comment: '${commentaire}'
                  },
                `
            break;
        default:
            return `
            ${nom}: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
                comment: '${commentaire}'
              },
            `
    }
}
}

const renduCleEtrangere = (nom)=> {
    return `
    this.belongsTo(models.${nom.ucfirst()}, {
        foreignKey: {
          name: '${nom}',
          field: '${nom}',
          allowNull: false
        }
      })
      models.${nom.ucfirst()}.hasMany(this, {
        foreignKey: {
          name: '${nom}',
          field: '${nom}',
          allowNull: true
        }
      })
    `
}


