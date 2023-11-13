const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * changeColumn(quantite) => "lignecommande"
 * changeColumn(quantite) => "lignefacture"
 * changeColumn(quantite) => "lignevente"
 *
 */

const info = {
  revision: 23,
  name: "noname",
  created: "2023-11-13T14:31:29.776Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "lignecommande",
      "quantite",
      {
        type: Sequelize.FLOAT,
        field: "quantite",
        comment: 'Quantité?? ""',
        defaultValue: 0,
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "lignefacture",
      "quantite",
      {
        type: Sequelize.FLOAT,
        field: "quantite",
        comment: 'Quantité?? ""',
        defaultValue: 0,
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "lignevente",
      "quantite",
      {
        type: Sequelize.FLOAT,
        field: "quantite",
        comment: 'Quantité?? ""',
        defaultValue: 0,
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "lignecommande",
      "quantite",
      {
        type: Sequelize.INTEGER,
        field: "quantite",
        comment: 'Quantité?? ""',
        defaultValue: 0,
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "lignefacture",
      "quantite",
      {
        type: Sequelize.INTEGER,
        field: "quantite",
        comment: 'Quantité?? ""',
        defaultValue: 0,
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "lignevente",
      "quantite",
      {
        type: Sequelize.INTEGER,
        field: "quantite",
        comment: 'Quantité?? ""',
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
