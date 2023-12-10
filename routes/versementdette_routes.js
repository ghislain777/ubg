
const versementdetteRoutes = require('express').Router();
const versementdetteController = require('../controllers/versementdette_controller');
versementdetteRoutes.get('/', async (req, res) =>  versementdetteController.getAll(req, res))
versementdetteRoutes.post('/', async (req, res) =>  versementdetteController.add(req, res))
versementdetteRoutes.put('/:id', async (req, res) =>  versementdetteController.update(req, res))
versementdetteRoutes.delete('/:id', async (req, res) =>  versementdetteController.delete(req, res))
versementdetteRoutes.get('/:id', async (req, res) =>  versementdetteController.getById(req, res))
versementdetteRoutes.post('/getby', async (req, res) =>  versementdetteController.getBy(req, res))
module.exports = versementdetteRoutes
