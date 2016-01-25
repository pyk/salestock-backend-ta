// This migration create categories table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', function(table) {
    table.increments('id').primary();
    table.text('name').unique();
    table.integer('parent_id').index()
        .references('id').inTable('categories');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};
