
const commandefournisseurRoutes = require('express').Router();
const commandefournisseurController = require('../controllers/commandefournisseur_controller');
commandefournisseurRoutes.get('/', async (req, res) =>  commandefournisseurController.getAll(req, res))
commandefournisseurRoutes.post('/', async (req, res) =>  commandefournisseurController.add(req, res))
commandefournisseurRoutes.put('/:id', async (req, res) =>  commandefournisseurController.update(req, res))
commandefournisseurRoutes.put('/statut/:id', async (req, res) =>  commandefournisseurController.updateStatut(req, res))
commandefournisseurRoutes.delete('/:id', async (req, res) =>  commandefournisseurController.delete(req, res))
commandefournisseurRoutes.get('/:id', async (req, res) =>  commandefournisseurController.getById(req, res))
commandefournisseurRoutes.get('/imprimer/:id', async (req, res) =>  commandefournisseurController.imprimer(req, res))
commandefournisseurRoutes.post('/getby', async (req, res) =>  commandefournisseurController.getBy(req, res))
module.exports = commandefournisseurRoutes
