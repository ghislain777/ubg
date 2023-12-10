
const creanceRoutes = require('express').Router();
const creanceController = require('../controllers/creance_controller');
creanceRoutes.get('/', async (req, res) =>  creanceController.getAll(req, res))
creanceRoutes.post('/', async (req, res) =>  creanceController.add(req, res))
creanceRoutes.put('/:id', async (req, res) =>  creanceController.update(req, res))
creanceRoutes.delete('/:id', async (req, res) =>  creanceController.delete(req, res))
creanceRoutes.get('/:id', async (req, res) =>  creanceController.getById(req, res))
creanceRoutes.post('/getby', async (req, res) =>  creanceController.getBy(req, res))
creanceRoutes.post('/versement/:id', async (req, res) =>  creanceController.versement(req, res))
module.exports = creanceRoutes
