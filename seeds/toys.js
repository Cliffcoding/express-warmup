const toys = require('./seed-data/toys')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
return knex.raw('TRUNCATE toys RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('toys').insert(toys);
    });
};
