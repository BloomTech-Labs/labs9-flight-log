exports.up = function(knex, Promise) {
  return knex.schema.createTable("pilots", pilots => {
    //primary key
    pilots.increments("id").primary();
    //username and password is now being taken care of by firebase
    //username
    // pilots.string("username", 16).unique().notNullable();
    //password //limited to 16 for the project
    // pilots.string("password", 16).notNullable();
    //first name
    pilots.string("firstName");
    //last name
    pilots.string("lastName");
    //isPaid for paid subscriber
    pilots.boolean("isPaid");
    pilots.string("UID").unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("pilots");
};

//commented by w.e.
