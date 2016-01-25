var express = require('express');
var router = express.Router();
var Category = require('./models').Category;

// Endpoint: GET /categories
router.get('/categories', function(req, res) {
  Category
      .query('where', {parent_id: null})
      .fetchAll({withRelated: ['subs.subs.subs.subs.subs.subs']})
      .then(function(categories) {
        res.jsonp({data: categories});
      })
});

// Endpoint: POST /categories
// Expected payload:
//    {"name": "category name", "parent_name": "parent name"}
router.post('/categories', function(req, res) {
  // Get the payload data
  var name = req.body['name'];
  var parentName = req.body['parent_name'];

  if(name == undefined) {
    res.status(500)
        .jsonp({error: 'Invalid JSON payload. Please read the documentation.'});
  } else {
    if(parentName != '') {
      // Fetch parent ID and insert the child
      new Category({name: parentName})
          .fetch()
          .then(function(parent) {
            new Category({name: name, parent_id: parent.get('id')})
                .save()
                .then(function(category) {
                  res.jsonp({status: '200 OK', data: category});
                })
                .catch(function(error) {
                  res.status(500)
                      .jsonp({error: 'Category already exists.'});
                })
          })
          .catch(function(error) {
            res.status(500)
                .jsonp({error: 'Parent category not exists.'});
          });
    } else {
      // Insert root category
      new Category({name: name, parent_id: parent.get('id')})
          .save()
          .then(function(category) {
            res.jsonp({status: '200 OK', data: category});
          })
          .catch(function(error) {
            res.jsonp({error: 'Failed to create new category'});
          });
    }   
  }
})

router.get('/categories/:id', function(req, res) {
  var categoryID = req.params.id;
  new Category({id: categoryID})
      .fetch({withRelated: ['subs.subs.subs.subs.subs.subs']})
      .then(function(category) {
        res.jsonp({data: category});
      })
      .catch(function(error) {
        res.status(500)
            .jsonp({error: "Category ID is invalid or not exists in the database."});
      })
})

router.put('/categories/:id', function(req, res) {
  var categoryID = req.params.id;
  var updatedName = req.body['name'];

  if(updatedName != undefined) {
    new Category({id: categoryID})
        .save({name: updatedName}, {patch: true})
        .then(function(updatedCategory) {
          res.jsonp({status: "200 OK", data: updatedCategory});
        })
        .catch(function(error) {
          res.status(500)
              .jsonp({error: "Category ID is invalid or not exists in the database."})
        });
  } else {
    res.status(500)
        .jsonp({error: 'Invalid JSON payload. Please read the documentation.'});
  }
})

module.exports = router;
