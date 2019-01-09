exports.up = function(knex, Promise) {
  return knex.schema.createTable("admins", admins => {
    admins.increments("id").primary();
    admins.string("firstName");
    admins.string("lastName");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("admins");
};
