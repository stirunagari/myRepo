const express = require('express');
const group_route = express.Router();
//crud controller
let crud = require('../controller/crud.controller');

// group model
let group = require('../model/group');

// Add group
group_route.route('/group/add').post((req, res, next) => {
  crud.addRecord(group, req, res, next);
});

// Get all group
group_route.route('/groups').get((req, res, next) => {
  crud.getAll(group, res, next);
})

// Get group by id
group_route.route('/group/:id').get((req, res, next) => {
  crud.getById(group, req.params.id, res, next);
})


// Update group
group_route.route('/group/:id').put((req, res, next) => {
  crud.update(group, req, res, next);
})

// Delete group
group_route.route('/group/:id').delete((req, res, next) => {
  crud.delete(group, req, res, next);
})

module.exports = group_route;