const express = require('express');
const field_route = express.Router();
//crud controller
let crud = require('../controller/crud.controller');

// field model
let field = require('../model/field');

// Add field
field_route.route('/field/add').post((req, res, next) => {
  crud.addRecord(field, req, res, next);
});

// Get all field
field_route.route('/fields').get((req, res, next) => {
  crud.getAll(field, res, next);
})

// Get field by id
field_route.route('/field/:id').get((req, res, next) => {
  crud.getById(field, req.params.id, res, next);
})


// Update field
field_route.route('/field/:id').put((req, res, next) => {
  crud.update(field, req, res, next);
})

// Delete field
field_route.route('/field/:id').delete((req, res, next) => {
  crud.delete(field, req, res, next);
})

module.exports = field_route;