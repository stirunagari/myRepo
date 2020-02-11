const express = require('express');
const app = express();
const field_group_route = express.Router();

// field_group model
let field_group = require('../model/field_group');

// Add field_group
field_group_route.route('/field_group/add').post((req, res, next) => {
  console.log(req.body)
  field_group.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all field_group
field_group_route.route('/field_group').get((req, res) => {
  field_group.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get field_group by id
field_group_route.route('/field_group/:id').get((req, res) => {
  field_group.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update field_group
field_group_route.route('/field_group/:id').put((req, res, next) => {
  field_group.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('field_group successfully updated!')
    }
  })
})

// Delete student
field_group_route.route('/field_group/:id').delete((req, res, next) => {
  field_group.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = field_group_route;