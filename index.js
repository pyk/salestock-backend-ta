var database = require('./database');
var api = require('./api');
var port = (process.env.PORT || 8080);

// Initialize db: migrations & seeds
database.init();

// Start API endpoints server on port PORT
api.serve(port);

