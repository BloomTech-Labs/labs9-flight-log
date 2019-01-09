
exports.up = function(knex, Promise) {
  return knex.schema.createTable('flights', flights => {
    flights.increments('id').primary()
    flights.date('flightDate')
    flights.string('flightName', 32).notNullable()
    flights.string('airports')
    flights.boolean('crossCountry')
    flights.integer('numOfLandings')
    flights.float('dayHours', 3, 2)
    flights.float('nightHours', 3, 2)
    flights.float('actInstruments', 3, 2)
    flights.float('simInstruments', 3, 2)
    flights.float('groundTrainer', 3, 2)
    //pic (pilot in command) float
    flights.float('pilotInCommand', 3, 2)
    //dual rec. (dual received) float
    flights.float('dualReceived', 3, 2)
    flights.float('total', 3, 2)
    flights.text('remarks', 512)
    flights.integer('pilotID').references('pilots.id')
  })
};

//float
//precision The total number of digits in a decimal number, both before and after the decimal point.
//scale The total number of digits after the decimal point in a number.

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('flights')
};
