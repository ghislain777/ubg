const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn(dateannulation) => "commande"
 * addColumn(datelivraison) => "commande"
 * addColumn(datefacturation) => "commande"
 * addColumn(datevalidation) => "commande"
 *
 */

const info = {
  revision: 8,
  name: "datescommande",
  created: "2023-10-07T11:37:03.880Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "commande",
      "dateannulation",
      {
        type: Sequelize.DATE,
        field: "dateannulation",
        comment: "date dannulation",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "commande",
      "datelivraison",
      {
        type: Sequelize.DATE,
        field: "datelivraison",
        comment: "Date de livraison",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "commande",
      "datefacturation",
      {
        type: Sequelize.DATE,
        field: "datefacturation",
        comment: "Date de facturation",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "commande",
      "datevalidation",
      {
        type: Sequelize.DATE,
        field: "datevalidation",
        comment: "Date de validation",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["commande", "dateannulation", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["commande", "datelivraison", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["commande", "datefacturation", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["commande", "datevalidation", { transaction }],
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
