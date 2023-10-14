
const depenseRoutes = require('express').Router();
const depenseController = require('../controllers/depense_controller');
depenseRoutes.get('/', async (req, res) =>  depenseController.getAll(req, res))
depenseRoutes.post('/', async (req, res) =>  depenseController.add(req, res))
depenseRoutes.put('/:id', async (req, res) =>  depenseController.update(req, res))
depenseRoutes.delete('/:id', async (req, res) =>  depenseController.delete(req, res))
depenseRoutes.get('/:id', async (req, res) =>  depenseController.getById(req, res))
depenseRoutes.post('/getby', async (req, res) =>  depenseController.getBy(req, res))
module.exports = depenseRoutes
