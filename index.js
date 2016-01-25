var database = require('./database');
var api = require('./api');
var port = process.env.PORT || 8080;

database.init();
api.serve(port);

