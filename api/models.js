var db = require('../database')
var bookshelf = require('bookshelf')(db.knexInstance);

var Category = bookshelf.Model.extend({
  tableName: 'categories',
  subs: function() {
    return this.hasMany(Category, ['parent_id']);
  }
});

module.exports = {
    Category: Category
}
