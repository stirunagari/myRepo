const express = require('express');
const app = express();
const userRoute = express.Router();

// user model
let user = require('../model/user');

// Add user
userRoute.route('/user/add').post((req, res, next) => {
  console.log(req.body)
  user.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all users
userRoute.route('/users').get((req, res) => {
  user.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get user by id
userRoute.route('/user/:id').get((req, res) => {
  user.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update user
userRoute.route('/user/:id').put((req, res, next) => {
  user.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('user successfully updated!')
    }
  })
})

// Delete student
userRoute.route('/user/:id').delete((req, res, next) => {
  user.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = userRoute;