// This migration create products table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function(table) {
    table.increments('id').primary();
    table.text('name').unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
