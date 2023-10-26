const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn(peutvendre) => "magasin"
 * changeColumn(civilite) => "utilisateur"
 *
 */

const info = {
  revision: 18,
  name: "noname",
  created: "2023-10-25T12:52:04.250Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "magasin",
      "peutvendre",
      {
        type: Sequelize.STRING,
        field: "peutvendre",
        comment: "Peut vendre?",
        defaultValue: true,
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "utilisateur",
      "civilite",
      {
        type: Sequelize.STRING,
        field: "civilite",
        comment: "Civilite",
        defaultValue: "M.",
        allowNull: false,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["magasin", "peutvendre", { transaction }],
  },
  {
    fn: "changeColumn",
    params: [
      "utilisateur",
      "civilite",
      {
        type: Sequelize.STRING,
        field: "civilite",
        comment: "Civilite",
        defaultValue: "",
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
