var express = require('express');
var router = express.Router();
var Product = require('./models').Product;

// Endpoint: GET /products
router.get('/products', function(req, res) {
  Product.fetchAll({withRelated: ['categories']})
      .then(function(products) {
        res.jsonp({data: products});
      })
      .catch(function(error) {
        console.log(error);
        res.status(500)
            .jsonp({error: "Internal server error"});
      })
});

module.exports = router;
