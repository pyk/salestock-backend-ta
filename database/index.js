var knexFile = require('./knexfile');
var knexConfig = knexFile.development;
if(process.env.SALESTOCK_PROD == 'true') {
  knexConfig = knexfile.production;
}
var knex = require('knex')(knexConfig);

module.exports = {
  init: function() {
    console.log('salestock-api: performs database migration...');
    knex.migrate.latest()
      .then(function() {
        console.log('salestock-api: seeding the database ...');
        return knex.seed.run();
      })
      .then(function() {
        console.log('salestock-api: migration finished');
      })
      .catch(function(error) {
        console.log('salestock-api: migration failed');
        console.log(error);
      });
  },
  knexInstance: knex
}
