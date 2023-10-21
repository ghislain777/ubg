
const mouvementdecomptefournisseurRoutes = require('express').Router();
const mouvementdecomptefournisseurController = require('../controllers/mouvementdecomptefournisseur_controller');
mouvementdecomptefournisseurRoutes.get('/', async (req, res) =>  mouvementdecomptefournisseurController.getAll(req, res))
mouvementdecomptefournisseurRoutes.post('/', async (req, res) =>  mouvementdecomptefournisseurController.add(req, res))
mouvementdecomptefournisseurRoutes.put('/:id', async (req, res) =>  mouvementdecomptefournisseurController.update(req, res))
mouvementdecomptefournisseurRoutes.delete('/:id', async (req, res) =>  mouvementdecomptefournisseurController.delete(req, res))
mouvementdecomptefournisseurRoutes.get('/:id', async (req, res) =>  mouvementdecomptefournisseurController.getById(req, res))
mouvementdecomptefournisseurRoutes.post('/getby', async (req, res) =>  mouvementdecomptefournisseurController.getBy(req, res))
module.exports = mouvementdecomptefournisseurRoutes
