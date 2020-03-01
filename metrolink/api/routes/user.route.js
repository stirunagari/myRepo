const express = require('express');
const user_route = express.Router();
//crud controller
let crud = require('../controller/crud.controller');

// user model
let user = require('../model/user');

// Add user
user_route.route('/user/add').post((req, res, next) => {
  crud.addRecord(user, req, res, next);
});

// Get all user
user_route.route('/users').get((req, res, next) => {
  crud.getAll(user, res, next);
})

// Get user by id
user_route.route('/user/:id').get((req, res, next) => {
  crud.getById(user, req.params.id, res, next);
})


// Update user
user_route.route('/user/:id').put((req, res, next) => {
  crud.update(user, req, res, next);
})

// Delete user
user_route.route('/user/:id').delete((req, res, next) => {
  crud.delete(user, req, res, next);
})

module.exports = user_route;