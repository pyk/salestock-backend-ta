var express = require('express');
var api = express();

// Set port to listen to
api.set('port', (process.env.PORT || 8080));

api.get('/', function(req, res) {
  res.send('hello world');
});

api.listen(api.get('port'), function() {
  console.log('api endpoint is running on port ', api.get('port'));
});
