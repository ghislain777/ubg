
const payementfournisseurRoutes = require('express').Router();
const payementfournisseurController = require('../controllers/payementfournisseur_controller');
payementfournisseurRoutes.get('/', async (req, res) =>  payementfournisseurController.getAll(req, res))
payementfournisseurRoutes.post('/', async (req, res) =>  payementfournisseurController.add(req, res))
payementfournisseurRoutes.put('/:id', async (req, res) =>  payementfournisseurController.update(req, res))
payementfournisseurRoutes.delete('/:id', async (req, res) =>  payementfournisseurController.delete(req, res))
payementfournisseurRoutes.get('/:id', async (req, res) =>  payementfournisseurController.getById(req, res))
payementfournisseurRoutes.post('/getby', async (req, res) =>  payementfournisseurController.getBy(req, res))
module.exports = payementfournisseurRoutes
