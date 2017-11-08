const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = mongoose.model('User')

router.post('/register', (req, res) => {
  let newUser = new User();
  newUser.username = req.body.username;
  newUser.setPassword(req.body.password);
  newUser.save((err) => {
    if(err) {
      res.send(err);
    } else {
      res.end();
    }
  })
})

module.exports = router;
