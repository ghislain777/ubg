const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn(soustotal) => "facture"
 * changeColumn(datevalidation) => "commande"
 * changeColumn(validite) => "facture"
 * changeColumn(datepayement) => "facture"
 *
 */

const info = {
  revision: 9,
  name: "datescommande",
  created: "2023-10-07T12:51:19.859Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "facture",
      "soustotal",
      {
        type: Sequelize.INTEGER,
        field: "soustotal",
        comment: "Sous total",
        defaultValue: 0,
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "commande",
      "datevalidation",
      {
        type: Sequelize.DATE,
        field: "datevalidation",
        comment: "Date de validation",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "facture",
      "validite",
      {
        type: Sequelize.INTEGER,
        field: "validite",
        comment: "Validité en jours",
        defaultValue: 0,
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "facture",
      "datepayement",
      {
        type: Sequelize.DATE,
        field: "datepayement",
        comment: "Date de payement",
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["facture", "soustotal", { transaction }],
  },
  {
    fn: "changeColumn",
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
  {
    fn: "changeColumn",
    params: [
      "facture",
      "validite",
      {
        type: Sequelize.INTEGER,
        field: "validite",
        comment: "Validité",
        defaultValue: 0,
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "facture",
      "datepayement",
      {
        type: Sequelize.DATE,
        field: "datepayement",
        comment: "Date de payement",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
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
