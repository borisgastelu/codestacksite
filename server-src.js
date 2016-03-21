import express from 'express';

let env = process.env.NODE_ENV = (process.env.NODE_ENV || 'development');
let app = express();
let config = require('./server/config/config')[env];

// Express Server Configuration
require('./server/config/express')(app, config);

// Routing Section
require('./server/config/routes')(app);

app.listen(config.port,
  () => console.log(`Listening on port ${config.port}...`)
);
