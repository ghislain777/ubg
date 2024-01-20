
const transfertstockRoutes = require('express').Router();
const transfertstockController = require('../controllers/transfertstock_controller');
transfertstockRoutes.get('/', async (req, res) =>  transfertstockController.getAll(req, res))
transfertstockRoutes.get('/bondexpedition/:id', async (req, res) =>  transfertstockController.bondexpedition(req, res))
transfertstockRoutes.get('/bondereception/:id', async (req, res) =>  transfertstockController.bondereception(req, res))
transfertstockRoutes.post('/', async (req, res) =>  transfertstockController.add(req, res))
transfertstockRoutes.put('/:id', async (req, res) =>  transfertstockController.update(req, res))
transfertstockRoutes.delete('/:id', async (req, res) =>  transfertstockController.delete(req, res))
transfertstockRoutes.get('/:id', async (req, res) =>  transfertstockController.getById(req, res))
transfertstockRoutes.post('/getby', async (req, res) =>  transfertstockController.getBy(req, res))
module.exports = transfertstockRoutes
