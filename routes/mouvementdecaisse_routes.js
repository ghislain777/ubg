
const mouvementdecaisseRoutes = require('express').Router();
const mouvementdecaisseController = require('../controllers/mouvementdecaisse_controller');
mouvementdecaisseRoutes.get('/', async (req, res) =>  mouvementdecaisseController.getAll(req, res))
mouvementdecaisseRoutes.post('/', async (req, res) =>  mouvementdecaisseController.add(req, res))
mouvementdecaisseRoutes.put('/:id', async (req, res) =>  mouvementdecaisseController.update(req, res))
mouvementdecaisseRoutes.delete('/:id', async (req, res) =>  mouvementdecaisseController.delete(req, res))
mouvementdecaisseRoutes.get('/:id', async (req, res) =>  mouvementdecaisseController.getById(req, res))
mouvementdecaisseRoutes.post('/getby', async (req, res) =>  mouvementdecaisseController.getBy(req, res))
module.exports = mouvementdecaisseRoutes
