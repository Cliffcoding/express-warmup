
exports.up = function(knex, Promise) {
  return knex.schema.createTable('toys', (table) => {
    table.increments('id').primary();
    table.integer('users_id').references('users.id').unsigned().onDelete('cascade');
    table.text('toy_name').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('toys')
};
