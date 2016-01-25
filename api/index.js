var express = require('express');
var api = express();
var categoryRouter = require('./category');
var bodyParser = require('body-parser');
var morgan = require('morgan');

// Endpoint: GET /
var index = express.Router();
index.get('/', function(req, res) {
  res.jsonp({
    name: "Salestock API", 
    documentation_url: 'https://github.com/pyk/salestock-backend-ta#readme'
  });
});

module.exports = {
  serve: function(port) {
    // use logger
    api.use(morgan('dev'));

    // use body parser
    api.use(bodyParser.json());

    // use a router
    api.use(index);
    api.use(categoryRouter);

    api.listen(port, function() {
      console.log('salestock-api: server running on port', port);
    });
  }
}
