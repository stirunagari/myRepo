const express = require('express');
const cityRoute = express.Router();

//crud controller
let crud = require('../controller/crud.controller');

// city model
let city = require('../model/city');


// Add city
cityRoute.route('/city/add').post((req, res, next) => {
    crud.addRecord(city, req, res, next);
});

// Get all cities
cityRoute.route('/cities').get((req, res, next) => {
    crud.getAll(city, res, next);
})

// Get city by id
cityRoute.route('/city/:id').get((req, res, next) => {
    crud.getById(city, req.params.id, res, next);
})


// Update city
cityRoute.route('/city/:id').put((req, res, next) => {
    crud.update(city, req, res, next);
})

// Delete city
cityRoute.route('/city/:id').delete((req, res, next) => {
    crud.delete(city, req, res, next);
})

module.exports = cityRoute;