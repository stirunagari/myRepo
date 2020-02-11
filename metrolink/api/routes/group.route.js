const express = require('express');
const app = express();
const groupRoute = express.Router();

// group model
let group = require('../model/group');

// Add group
groupRoute.route('/group/add').post((req, res, next) => {
  console.log(req.body)
  group.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all groups
groupRoute.route('/groups').get((req, res) => {
  group.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get group by id
groupRoute.route('/group/:id').get((req, res) => {
  group.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update group
groupRoute.route('/group/:id').put((req, res, next) => {
  group.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('group successfully updated!')
    }
  })
})

// Delete student
groupRoute.route('/group/:id').delete((req, res, next) => {
  group.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = groupRoute;