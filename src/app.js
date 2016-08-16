/*----------------------------------------------------------------------

!!!Don't touch if you are not sober or don't know what you are doing. Can break whole application.!!!

This File is for configuring express.

- app.use defines the routes and configures the middlewares to be used
- app.set defines certain settings for express
- Routing here works like a waterfall. all app.use are run after each other on a request. If nothing matches then the 404 at the end catches it.

----------------------------------------------------------------------*/

'use strict'

//Setting the config (change to production config by changing the active config in the config file)
var config = require('./config/config');
//require express
var express = require('express');
//Not sure what this does
var path = require('path');
//Middleware to serve a favicon. If passed to app.use then it will be sent with every request
var favicon = require('serve-favicon');
//Logger middleware to log stuff
var morgan = require('morgan');
//A middleware to parse cookies. Can also be used to pass secure cookies or signed cookies. They are then available under req.cookies
var cookieParser = require('cookie-parser');
//A middleware to parse the body. It will then be available under req.body
var bodyParser = require('body-parser');

//For routing. Should change this to a different system
var routes = require('./router.js');

//Init the app
var app = express();

// Path the views are served from
app.set('views', path.join(__dirname, 'views'));

//Setting the view-engine (rendering engine)
app.set('view engine', 'jade');

//Set the environment (gets it from config). But only if we are not running a test
app.set('env', config.env);

//connect to mongodb
// var mongoose = require('mongoose');
// mongoose.connect(config.db[app.settings.env], (err, res) => {
//   if(err) {
//     console.log('Error connecting to the database. ' + err);
//   } else {
//     console.log('Connected to Database: ' + config.db[app.settings.env]);
//   }
// });

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//Middleware. Use morgan as a logger middleware. It posts stuff to terminal. Uses a logging setting from the config
app.use(morgan(config.log));

//Configures the bodyparser middleware. JSON for parsing json. JSON can also be further configured. Can also be set to RAW, text,
app.use(bodyParser.json());
//Returns middleware that only parses urlencoded bodies.This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.
app.use(bodyParser.urlencoded({ extended: false }));

//Middleware to parse cookies
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

//This is the general routing for the app. Check router.js for the mapping of the routes
app.use('/', routes);

// catch 404 and forward to error handler. This executes when no route matches I guess. Should probably go into the route file as well.
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers...Should also go into the router?------------------------

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
