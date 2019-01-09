exports.up = function(knex, Promise) {

  knex.schema.dropTableIfExists('aircrafts').then(() => { 
    return knex.schema.createTable('aircrafts', aircrafts => {
      aircrafts.string('make')
      aircrafts.string('model')
      aircrafts.string('tailNumber')
      aircrafts
        .integer('flightID')
        .unsigned()
        .references('flights.id')
    })
})};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('aircrafts')
};
