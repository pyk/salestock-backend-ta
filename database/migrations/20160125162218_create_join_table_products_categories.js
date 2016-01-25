// This migration create categories and products join table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories_products', function(table) {
    table.integer('category_id').index()
        .references('id').inTable('categories');
    table.integer('product_id').index()
        .references('id').inTable('products');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories_products');
};
