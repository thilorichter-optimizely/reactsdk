/*
  Set the active configuration here through module.exports
*/

'use strict'


var dev = {
  "db": {
    "development": "mongodb://localhost:27017/pokehelp",
    "test": "mongodb://localhost:27017/test"
  },
  "logger": {
    "api": "logs/api.log",
    "exception": "logs/exceptions.log"
  },
  "env": "development",
  "log":"dev",
  "port": '3000',
  "timeout": 0,
  "verboseErrors": true
};

var prod = {};

module.exports = dev;
