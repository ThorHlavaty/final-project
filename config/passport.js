const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');


// Load User model
const db = require('../models');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'id', passwordField: 'pin' }, (id, pin, done) => {
      // Match pin
      db.User.findOne({
        where: {id: id}
      }).then(user => {
        console.log(user)
        if (!user) {
          return done(null, false, { message: 'That pin is not registered or already in use' });
        }

        // Match pin
        bcrypt.compare(pin, user.pin, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            
            return done(null, user);
          } else {
            return done(null, false, { message: 'Pin incorrect' });
          }
        });
      });
    })
  );

  passport.serializeUser(function(user, done) {
    console.log('Serialize', user)
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    db.User.findByPk(id).then((user) => {
      console.log('Deserialize', user)
      done(null, user)
    })
    .catch((err) => {
      done(err)
    }) 
  });
};
