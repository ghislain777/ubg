const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "vente", deps: [client, magasin]
 * createTable() => "lignevente", deps: [vente, stock]
 *
 */

const info = {
  revision: 21,
  name: "noname",
  created: "2023-11-09T06:45:18.674Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "vente",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          defaultValue: "",
          allowNull: true,
        },
        datevente: {
          type: Sequelize.DATE,
          field: "datevente",
          comment: "Date",
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
          allowNull: true,
        },
        montant: {
          type: Sequelize.INTEGER,
          field: "montant",
          comment: "Montant",
          defaultValue: 0,
          allowNull: true,
        },
        remise: {
          type: Sequelize.INTEGER,
          field: "remise",
          comment: "Remise",
          defaultValue: 0,
          allowNull: true,
        },
        montantremise: {
          type: Sequelize.INTEGER,
          field: "montantremise",
          comment: "Montant remisé",
          defaultValue: 0,
          allowNull: true,
        },
        taxe: {
          type: Sequelize.STRING,
          field: "taxe",
          comment: "Taxe",
          defaultValue: "",
          allowNull: true,
        },
        validite: {
          type: Sequelize.INTEGER,
          field: "validite",
          comment: "Validité",
          defaultValue: 0,
          allowNull: true,
        },
        statut: {
          type: Sequelize.STRING,
          field: "statut",
          comment: "Statut",
          defaultValue: "Nouveau",
          allowNull: true,
        },
        soustotal: {
          type: Sequelize.INTEGER,
          field: "soustotal",
          comment: "Sous total",
          defaultValue: 0,
          allowNull: false,
        },
        dateannulation: {
          type: Sequelize.DATE,
          field: "dateannulation",
          comment: "date dannulation",
          allowNull: true,
        },
        client: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "client", key: "id" },
          field: "client",
          name: "client",
          allowNull: false,
        },
        magasin: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "magasin", key: "id" },
          field: "magasin",
          name: "magasin",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "lignevente",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        quantite: {
          type: Sequelize.INTEGER,
          field: "quantite",
          comment: 'Quantité?? ""',
          defaultValue: 0,
          allowNull: true,
        },
        prixunitaire: {
          type: Sequelize.INTEGER,
          field: "prixunitaire",
          comment: 'Prix unitaire?? ""',
          defaultValue: 0,
          allowNull: true,
        },
        prixtotal: {
          type: Sequelize.INTEGER,
          field: "prixtotal",
          comment: 'Prix total?? ""',
          defaultValue: 0,
          allowNull: true,
        },
        remise: {
          type: Sequelize.INTEGER,
          field: "remise",
          comment: 'Remise?? ""',
          defaultValue: 0,
          allowNull: true,
        },
        quantiteorigine: {
          type: Sequelize.FLOAT,
          field: "quantiteorigine",
          comment: "Quantite produit origine",
          allowNull: true,
        },
        vente: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "vente", key: "id" },
          field: "vente",
          name: "vente",
          allowNull: false,
        },
        stock: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "stock", key: "id" },
          field: "stock",
          name: "stock",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["lignevente", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["vente", { transaction }],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
