var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var _ = require('lodash');
var Product = require('./models').Product;
var Category = require('./models').Category;

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

// Endpoint: POST /products
// Expected payload:
//    {"name": "product name", "categories": ["Dress", "Long dress"]}
router.post('/products', function(req, res) {
  var name = req.body['name'];
  var categories = req.body['categories'];
  var categoryModel = [];

  if(name == undefined || categories == undefined) {
    res.status(500)
        .jsonp({error: 'Invalid JSON payload. Please read the documentation.'});
  } else {
    Promise.resolve( 
      _.forEach(categories, function(categoryName) {
        new Category({name: categoryName})
            .fetch()
            .then(function(category) {
              categoryModel.push(category);
            })
            .catch(function(error) {
              console.log(error);
              res.status(500)
                  .jsonp({error: "Category not exists"});
            });
      })
    )
    .then(function() {
      new Product({name: name})
          .save()
          .then(function(product) {
            return product
                .categories()
                .attach(categoryModel)
                .then(function(){
                  res.jsonp({status: "200 OK", data: product});
                })
          })
          .catch(function(error) {
            console.log(error);
            res.status(500)
                .jsonp({error: "Internal server error"})
          });
    })
  }
})

router.get('/products/:id', function(req, res) {
  var productID = req.params.id;
  new Product({id: productID})
      .fetch({withRelated: ['categories']})
      .then(function(product) {
        res.jsonp({data: product});
      })
      .catch(function(error) {
        res.status(500)
            .jsonp({error: 'Product ID is invalid or not exists in the database.'});
      })
})

module.exports = router;
