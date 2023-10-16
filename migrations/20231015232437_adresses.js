const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "payementfournisseur", deps: [facturefournisseur]
 * addColumn(adresse) => "client"
 * addColumn(adresse) => "fournisseur"
 * changeColumn(description) => "role"
 *
 */

const info = {
  revision: 16,
  name: "adresses",
  created: "2023-10-15T23:24:37.361Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "payementfournisseur",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        datedepayement: {
          type: Sequelize.DATE,
          field: "datedepayement",
          comment: "Date de payement",
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
        soldeapres: {
          type: Sequelize.INTEGER,
          field: "soldeapres",
          comment: "Solde après",
          defaultValue: 0,
          allowNull: true,
        },
        facturefournisseur: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "facturefournisseur", key: "id" },
          field: "facturefournisseur",
          name: "facturefournisseur",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "client",
      "adresse",
      {
        type: Sequelize.STRING,
        field: "adresse",
        comment: "Adresse",
        defaultValue: "",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "fournisseur",
      "adresse",
      {
        type: Sequelize.STRING,
        field: "adresse",
        comment: "Adresse",
        defaultValue: "",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "role",
      "description",
      {
        type: Sequelize.STRING,
        field: "description",
        comment: "Description",
        defaultValue: "",
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["client", "adresse", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["fournisseur", "adresse", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["payementfournisseur", { transaction }],
  },
  {
    fn: "changeColumn",
    params: [
      "role",
      "description",
      {
        type: Sequelize.STRING,
        field: "description",
        comment: "Description",
        allowNull: false,
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
