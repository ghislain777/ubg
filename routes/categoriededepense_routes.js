
const categoriededepenseRoutes = require('express').Router();
const categoriededepenseController = require('../controllers/categoriededepense_controller');
categoriededepenseRoutes.get('/', async (req, res) =>  categoriededepenseController.getAll(req, res))
categoriededepenseRoutes.post('/', async (req, res) =>  categoriededepenseController.add(req, res))
categoriededepenseRoutes.put('/:id', async (req, res) =>  categoriededepenseController.update(req, res))
categoriededepenseRoutes.delete('/:id', async (req, res) =>  categoriededepenseController.delete(req, res))
categoriededepenseRoutes.get('/:id', async (req, res) =>  categoriededepenseController.getById(req, res))
categoriededepenseRoutes.post('/getby', async (req, res) =>  categoriededepenseController.getBy(req, res))
module.exports = categoriededepenseRoutes
