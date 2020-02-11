const express = require('express');
const app = express();
const fieldRoute = express.Router();

// field model
let field = require('../model/field');

// Add field
fieldRoute.route('/field/add').post((req, res, next) => {
  console.log(req.body)
  field.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all fields
fieldRoute.route('/fields').get((req, res) => {
  field.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get field by id
fieldRoute.route('/field/:id').get((req, res) => {
  field.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update field
fieldRoute.route('/field/:id').put((req, res, next) => {
  field.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('field successfully updated!')
    }
  })
})

// Delete student
fieldRoute.route('/field/:id').delete((req, res, next) => {
  field.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = fieldRoute;