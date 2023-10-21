
const mouvementdecompteclientRoutes = require('express').Router();
const mouvementdecompteclientController = require('../controllers/mouvementdecompteclient_controller');
mouvementdecompteclientRoutes.get('/', async (req, res) =>  mouvementdecompteclientController.getAll(req, res))
mouvementdecompteclientRoutes.post('/', async (req, res) =>  mouvementdecompteclientController.add(req, res))
mouvementdecompteclientRoutes.put('/:id', async (req, res) =>  mouvementdecompteclientController.update(req, res))
mouvementdecompteclientRoutes.delete('/:id', async (req, res) =>  mouvementdecompteclientController.delete(req, res))
mouvementdecompteclientRoutes.get('/:id', async (req, res) =>  mouvementdecompteclientController.getById(req, res))
mouvementdecompteclientRoutes.post('/getby', async (req, res) =>  mouvementdecompteclientController.getBy(req, res))
module.exports = mouvementdecompteclientRoutes
