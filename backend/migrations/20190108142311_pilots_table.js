
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pilots', pilots => {
    pilots.increments('id').primary()
    pilots
      .string('username', 16)
      .unique()
      .notNullable();
    pilots.boolean('isLoggedIn');
    pilots.boolean('isPaid');
    pilots
      .string('password', 16)
      .notNullable();

  }) 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('pilots')
  
};

//commented by w.e.
