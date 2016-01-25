// Shoes category:
// http://blog.shopious.com/fashion-tips/10-jenis-sepatu-wanita-yang-wajib-anda-diketahui
// http://www.shopious.com/wanita/sepatu/flat-shoes
exports.seed = function(knex, Promise) {
  return knex('categories').insert({name: 'Shoes', parent_id: null}, 'id')
    .then(function(ids) {
      return knex('categories').insert([
        {name: 'Flat Shoes', parent_id: ids[0]},
        {name: 'Stiletto Heels', parent_id: ids[0]},
        {name: 'Wedge Heels', parent_id: ids[0]},
        {name: 'Sneakers', parent_id: ids[0]},
        {name: 'Platform Heels', parent_id: ids[0]},
        {name: 'Boots', parent_id: ids[0]},
        {name: 'Loafers', parent_id: ids[0]},
        {name: 'Espadrilles', parent_id: ids[0]},
        {name: 'Peep-Toe Shoes', parent_id: ids[0]},
        {name: 'Kitten Heels', parent_id: ids[0]}
      ], 'id');
    }).then(function(ids) {
      return knex('categories').insert([
        {name: 'Ballerina', parent_id: ids[0]},
        {name: 'Open toe', parent_id: ids[0]},
        {name: 'Sling back', parent_id: ids[0]}
        ]);
    }).catch(function(error) {
      console.error(error);
    });
};
