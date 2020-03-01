const express = require('express');
const field_group_route = express.Router();
//crud controller
let crud = require('../controller/crud.controller');

// field_group model
let field_group = require('../model/field_group');

// Add field_group
field_group_route.route('/field_group/add').post((req, res, next) => {
  crud.addRecord(field_group, req, res, next);
});

// Get all field_group
field_group_route.route('/field_groups').get((req, res, next) => {
  crud.getAll(field_group, res, next);
})

// Get field_group by id
field_group_route.route('/field_group/:id').get((req, res, next) => {
  crud.getById(field_group, req.params.id, res, next);
})


// Update field_group
field_group_route.route('/field_group/:id').put((req, res, next) => {
  crud.update(field_group, req, res, next);
})

// Delete field_group
field_group_route.route('/field_group/:id').delete((req, res, next) => {
  crud.delete(field_group, req, res, next);
})

module.exports = field_group_route;