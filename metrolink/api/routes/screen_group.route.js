const express = require('express');
const app = express();
const screen_group_route = express.Router();

// screen_group model
let screen_group = require('../model/screen_group');

// Add screen_group
screen_group_route.route('/screen_group/add').post((req, res, next) => {
  console.log(req.body)
  screen_group.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all screen_group
screen_group_route.route('/screen_group').get((req, res) => {
  screen_group.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get screen_group by id
screen_group_route.route('/screen_group/:id').get((req, res) => {
  screen_group.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update screen_group
screen_group_route.route('/screen_group/:id').put((req, res, next) => {
  screen_group.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('screen_group successfully updated!')
    }
  })
})

// Delete student
screen_group_route.route('/screen_group/:id').delete((req, res, next) => {
  screen_group.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = screen_group_route;