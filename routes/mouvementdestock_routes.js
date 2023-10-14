
const mouvementdestockRoutes = require('express').Router();
const mouvementdestockController = require('../controllers/mouvementdestock_controller');
mouvementdestockRoutes.get('/', async (req, res) =>  mouvementdestockController.getAll(req, res))
mouvementdestockRoutes.post('/', async (req, res) =>  mouvementdestockController.add(req, res))
mouvementdestockRoutes.put('/:id', async (req, res) =>  mouvementdestockController.update(req, res))
mouvementdestockRoutes.delete('/:id', async (req, res) =>  mouvementdestockController.delete(req, res))
mouvementdestockRoutes.get('/:id', async (req, res) =>  mouvementdestockController.getById(req, res))
mouvementdestockRoutes.post('/getby', async (req, res) =>  mouvementdestockController.getBy(req, res))
module.exports = mouvementdestockRoutes
