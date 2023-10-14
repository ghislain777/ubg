const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "lignefacturefournisseur", deps: [facturefournisseur, stock]
 *
 */

const info = {
  revision: 15,
  name: "lignefactuefournisseur",
  created: "2023-10-14T06:20:08.669Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "lignefacturefournisseur",
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
          comment: "Quantité",
          defaultValue: 0,
          allowNull: true,
        },
        prixunitaire: {
          type: Sequelize.INTEGER,
          field: "prixunitaire",
          comment: "Prix unitaire",
          defaultValue: 0,
          allowNull: true,
        },
        prixtotal: {
          type: Sequelize.INTEGER,
          field: "prixtotal",
          comment: "Prix total",
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
        facturefournisseur: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "facturefournisseur", key: "id" },
          field: "facturefournisseur",
          name: "facturefournisseur",
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
    params: ["lignefacturefournisseur", { transaction }],
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
