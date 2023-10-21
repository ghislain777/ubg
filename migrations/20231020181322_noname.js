const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "mouvementdecompteclient", deps: [client]
 * createTable() => "mouvementdecomptefournisseur", deps: [fournisseur]
 * addColumn(compte) => "fournisseur"
 * changeColumn(compte) => "client"
 *
 */

const info = {
  revision: 17,
  name: "noname",
  created: "2023-10-20T18:13:22.864Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "mouvementdecompteclient",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        motif: {
          type: Sequelize.STRING,
          field: "motif",
          comment: "",
          defaultValue: "",
          allowNull: true,
        },
        montant: {
          type: Sequelize.INTEGER,
          field: "montant",
          comment: "Montant",
          defaultValue: 0,
          allowNull: true,
        },
        soldeapres: {
          type: Sequelize.INTEGER,
          field: "soldeapres",
          comment: "Solde après",
          defaultValue: 0,
          allowNull: true,
        },
        datemouvement: {
          type: Sequelize.DATE,
          field: "datemouvement",
          comment: "Date du mouvement",
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
          allowNull: true,
        },
        typedemouvement: {
          type: Sequelize.STRING,
          field: "typedemouvement",
          comment: "Type de mouvement",
          defaultValue: "",
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
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "mouvementdecomptefournisseur",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        motif: {
          type: Sequelize.STRING,
          field: "motif",
          comment: "",
          defaultValue: "",
          allowNull: true,
        },
        datemouvement: {
          type: Sequelize.DATE,
          field: "datemouvement",
          comment: "Date du mouvement",
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
        typedemouvement: {
          type: Sequelize.STRING,
          field: "typedemouvement",
          comment: "Type de mouvement",
          defaultValue: "",
          allowNull: true,
        },
        soldeapres: {
          type: Sequelize.INTEGER,
          field: "soldeapres",
          comment: "Solde après",
          defaultValue: 0,
          allowNull: true,
        },
        fournisseur: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "fournisseur", key: "id" },
          field: "fournisseur",
          name: "fournisseur",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "fournisseur",
      "compte",
      {
        type: Sequelize.INTEGER,
        field: "compte",
        comment: "Compte",
        defaultValue: 0,
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "client",
      "compte",
      {
        type: Sequelize.INTEGER,
        field: "compte",
        comment: "Compte",
        defaultValue: 0,
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["fournisseur", "compte", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["mouvementdecompteclient", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["mouvementdecomptefournisseur", { transaction }],
  },
  {
    fn: "changeColumn",
    params: [
      "client",
      "compte",
      {
        type: Sequelize.INTEGER,
        field: "compte",
        comment: 'Compte?? ""',
        defaultValue: 0,
        allowNull: true,
      },
      { transaction },
    ],
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
