'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = (0, _express2.default)();
var config = require('./server/config/config')[env];

// Express Server Configuration
require('./server/config/express')(app, config);

// Routing Section
require('./server/config/routes')(app);

app.listen(config.port, function () {
  return console.log('Listening on port ' + config.port + '...');
});
