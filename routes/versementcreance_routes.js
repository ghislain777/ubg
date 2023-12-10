
const versementcreanceRoutes = require('express').Router();
const versementcreanceController = require('../controllers/versementcreance_controller');
versementcreanceRoutes.get('/', async (req, res) =>  versementcreanceController.getAll(req, res))
versementcreanceRoutes.post('/', async (req, res) =>  versementcreanceController.add(req, res))
versementcreanceRoutes.put('/:id', async (req, res) =>  versementcreanceController.update(req, res))
versementcreanceRoutes.delete('/:id', async (req, res) =>  versementcreanceController.delete(req, res))
versementcreanceRoutes.get('/:id', async (req, res) =>  versementcreanceController.getById(req, res))
versementcreanceRoutes.post('/getby', async (req, res) =>  versementcreanceController.getBy(req, res))
module.exports = versementcreanceRoutes
