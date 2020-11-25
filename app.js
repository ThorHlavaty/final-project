const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./models')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const store = new SequelizeStore({
  db: db.sequelize
})
const passport = require('passport')
require('./config/passport')(passport)
const cors = require('cors')

const app = express();

// app.use(cors())

app.use(cookieParser());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(
  session({
    secret: 'secret', // used to sign the cookie
    resave: true, // update session even w/ no changes
    saveUninitialized: true, // always create a session
    store: store,
  })
);
store.sync()

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


app.use('/', indexRouter);
app.use('/users', usersRouter);


const port = process.env.PORT || 4000;
app.listen(port, () => console.log('App listening on port ' + port));

module.exports = app;
