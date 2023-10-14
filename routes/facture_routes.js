
const factureRoutes = require('express').Router();
const factureController = require('../controllers/facture_controller');
factureRoutes.get('/', async (req, res) =>  factureController.getAll(req, res))
factureRoutes.post('/', async (req, res) =>  factureController.add(req, res))
factureRoutes.put('/:id', async (req, res) =>  factureController.update(req, res))
factureRoutes.delete('/:id', async (req, res) =>  factureController.delete(req, res))
factureRoutes.get('/:id', async (req, res) =>  factureController.getById(req, res))
factureRoutes.post('/getby', async (req, res) =>  factureController.getBy(req, res))
factureRoutes.put('/payer/:id', async (req, res) =>  factureController.payerFacture(req, res))
factureRoutes.get('/imprimer/:id', async (req, res) =>  factureController.imprimerFacture(req, res))
module.exports = factureRoutes
