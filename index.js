var express = require('express');
var api = express();

// Set port to listen to
api.set('port', (process.env.PORT || 8080));

// Endpoint: /
api.get('/', function(req, res) {
  res.jsonp({
    name: "Salestock API", 
    documentation_url: 'https://github.com/pyk/salestock-backend-ta#readme'
  });
});

api.listen(api.get('port'), function() {
  console.log('api endpoint is running on port ', api.get('port'));
});
