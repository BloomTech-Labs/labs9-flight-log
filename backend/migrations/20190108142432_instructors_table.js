exports.up = function(knex, Promise) {
  return knex.schema.createTable("instructors", instructors => {
    //primary
    instructors.increments("id").primary();
    instructors.string("name").notNullable();
    instructors.string("licenseNum", 14).notNullable();
    instructors.text("notes", 512);
    instructors.text("ratings", 256);
    instructors.text("contactInfo", 512);
    instructors
      .integer("pilotsID")
      .unsigned()
      .references("pilots.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("instructors");
};
