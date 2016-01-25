var express = require('express');
var router = express.Router();
var models = require('./models');
var Category = models.Category;

// Endpoint: GET /categories
router.get('/categories', function(req, res) {
  Category
      .query('where', {parent_id: null})
      .fetchAll({withRelated: ['subs.subs.subs.subs.subs.subs']})
      .then(function(categories) {
        res.jsonp({data: categories});
      })
});

module.exports = router;
