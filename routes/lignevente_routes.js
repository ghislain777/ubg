
const ligneventeRoutes = require('express').Router();
const ligneventeController = require('../controllers/lignevente_controller');
ligneventeRoutes.get('/', async (req, res) =>  ligneventeController.getAll(req, res))
ligneventeRoutes.post('/', async (req, res) =>  ligneventeController.add(req, res))
ligneventeRoutes.put('/:id', async (req, res) =>  ligneventeController.update(req, res))
ligneventeRoutes.delete('/:id', async (req, res) =>  ligneventeController.delete(req, res))
ligneventeRoutes.get('/:id', async (req, res) =>  ligneventeController.getById(req, res))
ligneventeRoutes.post('/getby', async (req, res) =>  ligneventeController.getBy(req, res))
module.exports = ligneventeRoutes
