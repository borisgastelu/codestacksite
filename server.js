var express = require('express');

var env = process.env.NODE_ENV = (process.env.NODE_ENV || 'development');
var app = express();
var config = require('./server/config/config')[env];

// Express Server Configuration
require('./server/config/express')(app, config);

// Routing Section
require('./server/config/routes')(app);

app.listen(config.port, function() {
  console.log('Listening on port ' + config.port + '...');
});
