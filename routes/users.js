const express = require('express');
const { forwardAuthenticated } = require('../config/auth');
const router = express.Router();
const db = require('../models')
const passport = require('passport');
const bcrypt = require('bcrypt');



// Create Registration
router.post('/register', (req, res) => {
  const {
    name,
    pin,
  } = req.body;


  if (!name || !pin) {
    res.status(404).json({error: 'Enter all fields'})
  }


  bcrypt.hash(pin, 10, (err, hash) => {
    db.User.create({
        name,
        pin: hash
      })
      .then((result) => {
        req.json({success: 'You can now log in'});
      })
      .catch(err => console.log(err));
  });
});



// Login
router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.json({error: 'Could not log in', info}); }
    res.json({user})
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.json({success: 'You are logged out.'});
})

module.exports = router;
