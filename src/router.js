/*----------------------------------------------------------------------

Router configuration.

- If a new controller is added, it needs to be required here.
- Each path has a different controller.

----------------------------------------------------------------------*/

var express = require('express');
var router = express.Router();

//Define the handlers here. A file for each route
var api = require('./controller/api');

//Define the controllers for the paths
router.use('/api', api);

module.exports = router;
