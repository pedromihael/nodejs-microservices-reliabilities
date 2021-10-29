exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('reliability')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('reliability').insert([
        {
          name: 'Provider',
          meta_percent: 98
        },
        {
          name: 'Project',
          meta_percent: 95
        },
      ]);
    });
};
