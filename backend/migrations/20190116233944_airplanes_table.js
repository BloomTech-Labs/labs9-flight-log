exports.up = function(knex, Promise) {
  return knex.schema.createTable("airplanes", airplanes => {
    //primary key
    airplanes.increments("id").primary();
    airplanes.string("tailNumber");
    airplanes.string("make");
    airplanes.string("model");
    airplanes.string("category"); //sel or mel
    airplanes.string("imageName", 5000);
    airplanes
      .string("pilotsUID")
      .notNullable()
      .references("pilots.UID");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("airplanes");
};
