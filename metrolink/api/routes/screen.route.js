const express = require('express');
const app = express();
const screenRoute = express.Router();

// screen model
let screen = require('../model/screen');

// Add screen
screenRoute.route('/screen/add').post((req, res, next) => {
  console.log(req.body)
  screen.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all screens
screenRoute.route('/screens').get((req, res) => {
  screen.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get screen by id
screenRoute.route('/screen/:id').get((req, res) => {
  screen.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update screen
screenRoute.route('/screen/:id').put((req, res, next) => {
  screen.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('screen successfully updated!')
    }
  })
})

// Delete student
screenRoute.route('/screen/:id').delete((req, res, next) => {
  screen.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = screenRoute;