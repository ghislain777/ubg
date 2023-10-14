
const caissemagasinRoutes = require('express').Router();
const caissemagasinController = require('../controllers/caissemagasin_controller');
caissemagasinRoutes.get('/', async (req, res) =>  caissemagasinController.getAll(req, res))
caissemagasinRoutes.post('/', async (req, res) =>  caissemagasinController.add(req, res))
caissemagasinRoutes.put('/:id', async (req, res) =>  caissemagasinController.update(req, res))
caissemagasinRoutes.delete('/:id', async (req, res) =>  caissemagasinController.delete(req, res))
caissemagasinRoutes.get('/:id', async (req, res) =>  caissemagasinController.getById(req, res))
caissemagasinRoutes.post('/getby', async (req, res) =>  caissemagasinController.getBy(req, res))
module.exports = caissemagasinRoutes
