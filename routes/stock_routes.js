
const stockRoutes = require('express').Router();
const stockController = require('../controllers/stock_controller');
stockRoutes.get('/', async (req, res) =>  stockController.getAll(req, res))
stockRoutes.post('/', async (req, res) =>  stockController.add(req, res))
stockRoutes.put('/:id', async (req, res) =>  stockController.update(req, res))
stockRoutes.delete('/:id', async (req, res) =>  stockController.delete(req, res))
stockRoutes.get('/:id', async (req, res) =>  stockController.getById(req, res))
stockRoutes.post('/getby', async (req, res) =>  stockController.getBy(req, res))
module.exports = stockRoutes
