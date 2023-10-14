
const payementclientRoutes = require('express').Router();
const payementclientController = require('../controllers/payementclient_controller');
payementclientRoutes.get('/', async (req, res) =>  payementclientController.getAll(req, res))
payementclientRoutes.post('/', async (req, res) =>  payementclientController.add(req, res))
payementclientRoutes.put('/:id', async (req, res) =>  payementclientController.update(req, res))
payementclientRoutes.delete('/:id', async (req, res) =>  payementclientController.delete(req, res))
payementclientRoutes.get('/:id', async (req, res) =>  payementclientController.getById(req, res))
payementclientRoutes.post('/getby', async (req, res) =>  payementclientController.getBy(req, res))
module.exports = payementclientRoutes
