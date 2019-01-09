
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pilots', pilots => {
    pilots
      .increments()
      .primary() //primary key
    //username
    pilots
      .string('username', 16)
      .unique()
      .notNullable();
    //isLoggedIn
    pilots.boolean('isLoggedIn');
    //isPaid
    pilots.boolean('isPaid');
    //password //limited to 16 for the project
    pilots
      .string('password', 16)
      .notNullable();

  }) 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('pilots')
  
};

//commented by w.e.
