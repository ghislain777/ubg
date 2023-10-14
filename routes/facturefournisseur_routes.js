
const facturefournisseurRoutes = require('express').Router();
const facturefournisseurController = require('../controllers/facturefournisseur_controller');
facturefournisseurRoutes.get('/', async (req, res) =>  facturefournisseurController.getAll(req, res))
facturefournisseurRoutes.post('/', async (req, res) =>  facturefournisseurController.add(req, res))
facturefournisseurRoutes.put('/payer/:id', async (req, res) =>  facturefournisseurController.payer(req, res))
facturefournisseurRoutes.put('/:id', async (req, res) =>  facturefournisseurController.update(req, res))
facturefournisseurRoutes.delete('/:id', async (req, res) =>  facturefournisseurController.delete(req, res))
facturefournisseurRoutes.get('/:id', async (req, res) =>  facturefournisseurController.getById(req, res))
facturefournisseurRoutes.get('/imprimer/:id', async (req, res) =>  facturefournisseurController.imprimer(req, res))
facturefournisseurRoutes.post('/getby', async (req, res) =>  facturefournisseurController.getBy(req, res))
module.exports = facturefournisseurRoutes
