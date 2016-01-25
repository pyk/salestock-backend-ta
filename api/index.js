var express = require('express');
var api = express();
var categoryRouter = require('./category');

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
    // use a router
    api.use(index);
    api.use(categoryRouter);

    api.listen(port, function() {
      console.log('api endpoint is running on port ', api.get('port'));
    });
  }
}
