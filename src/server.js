#!/usr/bin/env node

/*----------------------------------------------------------------------

!!!Don't touch if you are not sober or don't know what you are doing. Can break whole application.!!!

This File is for configuring and starting the server. Requires the express app defined in ./app

----------------------------------------------------------------------*/

//requires the express middleware which is configured in app.js
var app = require('./app');

//A debug utility. Not sure how it works yet ....
var debug = require('debug')('pokehelp:server');

//Require the node http server which is passed the express app middleware
var http = require('http');

var config = require('./config/config');


//Set express port
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

//Create the http server
var server = http.createServer(app);

//Set the timeout. In dev, because of long running scripts, it should never time out
server.timeout = config.timeout;

//Listen on the port
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);



/* ----- HELPER FUNCTIONS -------------------------------------------------------*/

//Normalize a port into a number, string, or false.

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

//onError and on Listening helper functions

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
