const express = require('express')
const router = express.Router({mergeParams: true})
const { User } = require('../models')
const bcrypt = require('bcryptjs')

router.get('/new', (req, res) => {
  res.render('registrations/new')
})

router.post('/', async (req, res) => {
  // Create a user with a hashed password using 'bcryptjs'
  bcrypt.hash(req.body.password, function(err,hash) {
  User.password = hash;
  })
    // Then store the user id in the session
  // Then redirect to '/top-secret'
  res.redirect("/top-secret")
})

module.exports = router
