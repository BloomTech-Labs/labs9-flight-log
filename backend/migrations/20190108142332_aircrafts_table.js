exports.up = function(knex, Promise) {
  return knex.schema.createTable("aircrafts", aircrafts => {
    aircrafts.increments("id").primary();
    aircrafts.string("make");
    aircrafts.string("model");
    aircrafts.string("tailNumber");
    aircrafts.integer("flightID").references("flights.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("flights");
};
