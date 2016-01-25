// Knexfile
// This file contains various database configurations that used by
// Knex CLI. 
// http://knexjs.org/#Migrations
module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://vagrant:vagrant@localhost/salestock',
    debug: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};
