
const magasinRoutes = require('express').Router();
const magasinController = require('../controllers/magasin_controller');
magasinRoutes.get('/', async (req, res) =>  magasinController.getAll(req, res))
magasinRoutes.post('/', async (req, res) =>  magasinController.add(req, res))
magasinRoutes.put('/:id', async (req, res) =>  magasinController.update(req, res))
magasinRoutes.delete('/:id', async (req, res) =>  magasinController.delete(req, res))
magasinRoutes.get('/:id', async (req, res) =>  magasinController.getById(req, res))
magasinRoutes.post('/getby', async (req, res) =>  magasinController.getBy(req, res))
module.exports = magasinRoutes
