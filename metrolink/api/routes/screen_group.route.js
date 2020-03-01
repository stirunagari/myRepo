const express = require('express');
const screen_group_route = express.Router();
//crud controller
let crud = require('../controller/crud.controller');

// screen_group model
let screen_group = require('../model/screen_group');

// Add screen_group
screen_group_route.route('/screen_group/add').post((req, res, next) => {
  crud.addRecord(screen_group, req, res, next);
});

// Get all screen_group
screen_group_route.route('/screen_groups').get((req, res, next) => {
  crud.getAll(screen_group, res, next);
})

// Get screen_group by id
screen_group_route.route('/screen_group/:id').get((req, res, next) => {
  crud.getById(screen_group, req.params.id, res, next);
})


// Update screen_group
screen_group_route.route('/screen_group/:id').put((req, res, next) => {
  crud.update(screen_group, req, res, next);
})

// Delete screen_group
screen_group_route.route('/screen_group/:id').delete((req, res, next) => {
  crud.delete(screen_group, req, res, next);
})

module.exports = screen_group_route;