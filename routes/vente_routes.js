
const venteRoutes = require('express').Router();
const venteController = require('../controllers/vente_controller');
venteRoutes.get('/', async (req, res) =>  venteController.getAll(req, res))
venteRoutes.post('/', async (req, res) =>  venteController.add(req, res))
venteRoutes.put('/:id', async (req, res) =>  venteController.update(req, res))
venteRoutes.delete('/:id', async (req, res) =>  venteController.delete(req, res))
venteRoutes.get('/:id', async (req, res) =>  venteController.getById(req, res))
venteRoutes.post('/getby', async (req, res) =>  venteController.getBy(req, res))
venteRoutes.get('/imprimer/:id', async (req, res) =>  venteController.imprimerVente(req, res))
venteRoutes.put('/statut/:id', async (req, res) =>  venteController.updateStatut(req, res))

module.exports = venteRoutes
