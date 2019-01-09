
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructors', instructors => {
    //instructorname string NN
    instructors.string('name').notNullable()
    //licensenumber string(14) NN
    instructors.string('licenseNum', 14).notNullable()
    //notes text 
    instructors.text('notes', 512)
    //rating text
    instructors.text('ratings', 256)
    //contactinfo text
    instructors.text('contactInfo', 512)
    //flightID int FK\
    instructors.foreign('flightID').references('flight.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructors')
};
