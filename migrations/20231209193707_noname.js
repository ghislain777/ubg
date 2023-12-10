const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "creance", deps: [client, caissemagasin]
 * createTable() => "dette", deps: [client, caissemagasin]
 * createTable() => "versementcreance", deps: [creance]
 * createTable() => "versementdette", deps: [dette]
 *
 */

const info = {
  revision: 26,
  name: "noname",
  created: "2023-12-09T19:37:07.304Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "creance",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        montant: {
          type: Sequelize.INTEGER,
          field: "montant",
          comment: "Montant",
          allowNull: false,
        },
        datecreance: {
          type: Sequelize.DATE,
          field: "datecreance",
          comment: "Date de la creance",
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        montantverse: {
          type: Sequelize.INTEGER,
          field: "montantverse",
          comment: "Montant versé",
          defaultValue: 0,
          allowNull: false,
        },
        montantrestant: {
          type: Sequelize.INTEGER,
          field: "montantrestant",
          comment: "montant restant",
          defaultValue: 0,
          allowNull: false,
        },
        Ferme: {
          type: Sequelize.BOOLEAN,
          field: "Ferme",
          comment: "Fermé?",
          defaultValue: false,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: true,
        },
        client: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "client", key: "id" },
          field: "client",
          name: "client",
          allowNull: true,
        },
        caissemagasin: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "caissemagasin", key: "id" },
          field: "caissemagasin",
          name: "caissemagasin",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "dette",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        montant: {
          type: Sequelize.INTEGER,
          field: "montant",
          comment: "Montant",
          allowNull: false,
        },
        datedette: {
          type: Sequelize.DATE,
          field: "datedette",
          comment: "Date de la dette",
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        montantverse: {
          type: Sequelize.INTEGER,
          field: "montantverse",
          comment: "Montant versé",
          defaultValue: 0,
          allowNull: false,
        },
        montantrestant: {
          type: Sequelize.INTEGER,
          field: "montantrestant",
          comment: "montant restant",
          defaultValue: 0,
          allowNull: false,
        },
        Ferme: {
          type: Sequelize.BOOLEAN,
          field: "Ferme",
          comment: "Fermé?",
          defaultValue: false,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: true,
        },
        client: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "client", key: "id" },
          field: "client",
          name: "client",
          allowNull: true,
        },
        caissemagasin: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "caissemagasin", key: "id" },
          field: "caissemagasin",
          name: "caissemagasin",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "versementcreance",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        montantverse: {
          type: Sequelize.INTEGER,
          field: "montantverse",
          comment: "Montant versé",
          defaultValue: 0,
          allowNull: false,
        },
        dateversement: {
          type: Sequelize.DATE,
          field: "dateversement",
          comment: "Date versement",
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        resteaverser: {
          type: Sequelize.INTEGER,
          field: "resteaverser",
          comment: "Reste à verser",
          defaultValue: 0,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: true,
        },
        creance: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "creance", key: "id" },
          field: "creance",
          name: "creance",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "versementdette",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        montantverse: {
          type: Sequelize.INTEGER,
          field: "montantverse",
          comment: "Montant versé",
          defaultValue: 0,
          allowNull: false,
        },
        dateversement: {
          type: Sequelize.DATE,
          field: "dateversement",
          comment: "Date versement",
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        resteaverser: {
          type: Sequelize.INTEGER,
          field: "resteaverser",
          comment: "Reste à verser",
          defaultValue: 0,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: true,
        },
        dette: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "dette", key: "id" },
          field: "dette",
          name: "dette",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["creance", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["dette", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["versementcreance", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["versementdette", { transaction }],
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
