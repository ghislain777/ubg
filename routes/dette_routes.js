
const detteRoutes = require('express').Router();
const detteController = require('../controllers/dette_controller');
detteRoutes.get('/', async (req, res) =>  detteController.getAll(req, res))
detteRoutes.post('/', async (req, res) =>  detteController.add(req, res))
detteRoutes.put('/:id', async (req, res) =>  detteController.update(req, res))
detteRoutes.delete('/:id', async (req, res) =>  detteController.delete(req, res))
detteRoutes.get('/:id', async (req, res) =>  detteController.getById(req, res))
detteRoutes.post('/getby', async (req, res) =>  detteController.getBy(req, res))
detteRoutes.post('/versement/:id', async (req, res) =>  detteController.versement(req, res))
module.exports = detteRoutes
