const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "facturefournisseur", deps: [modedepayement, commandefournisseur, fournisseur, magasin]
 * changeColumn(statut) => "commandefournisseur"
 *
 */

const info = {
  revision: 14,
  name: "facturefournisseur",
  created: "2023-10-14T06:17:31.845Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "facturefournisseur",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        datefacture: {
          type: Sequelize.DATE,
          field: "datefacture",
          comment: "Date facture",
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
          allowNull: true,
        },
        datepayement: {
          type: Sequelize.DATE,
          field: "datepayement",
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
        soustotal: {
          type: Sequelize.INTEGER,
          field: "soustotal",
          comment: "Sous total",
          defaultValue: 0,
          allowNull: true,
        },
        taxe: {
          type: Sequelize.INTEGER,
          field: "taxe",
          comment: "Taxe",
          defaultValue: 0,
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
          defaultValue: "",
          allowNull: true,
        },
        payementcomplet: {
          type: Sequelize.BOOLEAN,
          field: "payementcomplet",
          comment: "Payement complet",
          defaultValue: true,
          allowNull: true,
        },
        montantpaye: {
          type: Sequelize.INTEGER,
          field: "montantpaye",
          comment: "Montant payé",
          defaultValue: 0,
          allowNull: true,
        },
        resteapayer: {
          type: Sequelize.INTEGER,
          field: "resteapayer",
          comment: "Reste à payer",
          defaultValue: 0,
          allowNull: true,
        },
        etat: {
          type: Sequelize.STRING,
          field: "etat",
          comment: "Etat",
          defaultValue: "",
          allowNull: true,
        },
        fichier: {
          type: Sequelize.STRING,
          field: "fichier",
          comment: "Fichier",
          defaultValue: "",
          allowNull: true,
        },
        modedepayement: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "modedepayement", key: "id" },
          field: "modedepayement",
          name: "modedepayement",
          allowNull: false,
        },
        commandefournisseur: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "commandefournisseur", key: "id" },
          field: "commandefournisseur",
          name: "commandefournisseur",
          allowNull: false,
        },
        fournisseur: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "fournisseur", key: "id" },
          field: "fournisseur",
          name: "fournisseur",
          allowNull: true,
        },
        magasin: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "magasin", key: "id" },
          field: "magasin",
          name: "magasin",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "commandefournisseur",
      "statut",
      {
        type: Sequelize.STRING,
        field: "statut",
        comment: "Statut",
        defaultValue: "Nouveau",
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["facturefournisseur", { transaction }],
  },
  {
    fn: "changeColumn",
    params: [
      "commandefournisseur",
      "statut",
      {
        type: Sequelize.STRING,
        field: "statut",
        comment: "Statut",
        defaultValue: "",
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
