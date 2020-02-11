const express = require('express');
const app = express();
const cityRoute = express.Router();

// city model
let city = require('../model/city');

// Add city
cityRoute.route('/city/add').post((req, res, next) => {
  console.log(req.body)
  city.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all cities
cityRoute.route('/cities').get((req, res) => {
  city.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get city by id
cityRoute.route('/city/:id').get((req, res) => {
  city.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update city
cityRoute.route('/city/:id').put((req, res, next) => {
  city.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('city successfully updated!')
    }
  })
})

// Delete student
cityRoute.route('/city/:id').delete((req, res, next) => {
  city.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = cityRoute;