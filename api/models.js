var db = require('../database')
var bookshelf = require('bookshelf')(db.knexInstance);

var Category = bookshelf.Model.extend({
  tableName: 'categories',
  subs: function() {
    return this.hasMany(Category, ['parent_id']);
  }
});

var Product = bookshelf.Model.extend({
    tableName: 'products',
    categories: function() {
        return this.belongsToMany(Category);
    }
})

module.exports = {
    Category: Category,
    Product: Product
}
