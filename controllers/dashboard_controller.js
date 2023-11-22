const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require("sequelize");
const fonctions = require('../fonctions');
const appService = require('../services/dashboard_service');
const { parseISO } = require('date-fns');

const dashboardController = {}


dashboardController.getDashboard = async (req, res) => {
    
const {debut, fin} = req.query
console.log(debut)
const dateDebut =  new Date(debut+" 00:01")
const dateFin = new Date(fin+" 23:59")
console.log(dateDebut)

    try {
        const response = await appService.getdashboard(dateDebut, dateFin)
        console.log(response)

        res.status(200).send(response)
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = dashboardController

