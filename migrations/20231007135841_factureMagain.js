const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn(magasin) => "facture"
 * addColumn(client) => "facture"
 * changeColumn(resteapayer) => "facture"
 *
 */

const info = {
  revision: 10,
  name: "factureMagain",
  created: "2023-10-07T13:58:41.504Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "facture",
      "magasin",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "magasin", key: "id" },
        field: "magasin",
        name: "magasin",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "facture",
      "client",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "client", key: "id" },
        field: "client",
        name: "client",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "facture",
      "resteapayer",
      {
        type: Sequelize.INTEGER,
        field: "resteapayer",
        comment: "Reste à payer",
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
    params: ["facture", "magasin", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["facture", "client", { transaction }],
  },
  {
    fn: "changeColumn",
    params: [
      "facture",
      "resteapayer",
      {
        type: Sequelize.INTEGER,
        field: "resteapayer",
        comment: "Reste à payé",
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
