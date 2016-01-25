// Dress category: https://en.wikipedia.org/wiki/Dress#Types
exports.seed = function(knex, Promise) {
  return knex('categories').insert({name: 'Dress', parent_id: null}, 'id')
    .then(function(ids) {
      return knex('categories').insert([
        {name: 'Long dress', parent_id: ids[0]},
        {name: 'Maxi dresses', parent_id: ids[0]},
        {name: 'Midi dress', parent_id: ids[0]},
        {name: 'Knee length', parent_id: ids[0]},
        {name: 'Mini dress', parent_id: ids[0]},
        {name: 'Micro dress', parent_id: ids[0]}
      ], 'id');
    }).then(function(ids) {
      return knex('categories').insert([
        {name: 'Long Prom Dresses', parent_id: ids[0]},
        {name: 'Long Formal Dresses', parent_id: ids[0]}
        ]);
    }).catch(function(error) {
      console.error(error);
    });
};
