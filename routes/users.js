const express = require('express');
const { ensureAuthenticated } = require('../config/auth');
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
        res.json({success: 'You can now log in', user:result});
      })
      .catch(err => {
        if(err instanceof db.Sequelize.ForeignKeyConstraintError){
        
        } else {
          res.status(400).send({message: 'Duplicate Name'})
        }
      });
  });
});


// Get all User id and name for the Selector button
router.get('/', (req, res)=>{
  db.User.findAll().then(users => {
    return users.map(user => {
      return {
      id: user.id,
      name: user.name,
      manager: user.manager
    }})
  })
  .then(users => res.json(users))
})

// Login
router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.status(401).send({message: 'Invalid Pin'}); }
    req.login(user, () => {})
    res.json({user})
  })(req, res, next);
});



// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.json({success: 'You are logged out.'});
})


// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.status(200)
})


// 
router.get('/current', (req,res)=>{
  if (!req.isAuthenticated()) {
    return res.json({});
  }
  return res.json({user: req.user})
})

module.exports = router;
