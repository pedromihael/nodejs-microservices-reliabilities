exports.up = function (knex) {
  return knex.schema
    .createTable('reliability', (table) => {
      table.increments('id', { primaryKey: true });
      table.string('name').notNullable();
      table.float('meta_percent', 2).notNullable();
      table.timestamps(true, true);
    })
    .alterTable('reliability', (table) => {
      table.unique('name');
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('reliability')
};
