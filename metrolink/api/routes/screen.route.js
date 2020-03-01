const express = require('express');
const screen_route = express.Router();
//crud controller
let crud = require('../controller/crud.controller');

// screen model
let screen = require('../model/screen');

// Add screen
screen_route.route('/screen/add').post((req, res, next) => {
  crud.addRecord(screen, req, res, next);
});

// Get all screen
screen_route.route('/screens').get((req, res, next) => {
  crud.getAll(screen, res, next);
})

// Get screen by id
screen_route.route('/screen/:id').get((req, res, next) => {
  crud.getById(screen, req.params.id, res, next);
})


// Update screen
screen_route.route('/screen/:id').put((req, res, next) => {
  crud.update(screen, req, res, next);
})

// Delete screen
screen_route.route('/screen/:id').delete((req, res, next) => {
  crud.delete(screen, req, res, next);
})

module.exports = screen_route;