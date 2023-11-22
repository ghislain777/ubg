
const dashboardRoutes = require('express').Router();
const dashboardController = require('../controllers/dashboard_controller')
dashboardRoutes.get('/', async (req, res) => dashboardController.getDashboard(req, res))
module.exports = dashboardRoutes
