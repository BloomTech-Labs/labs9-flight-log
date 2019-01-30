exports.up = function(knex, Promise) {
  return knex.schema.createTable("flights", flights => {
    //priamry key
    flights.increments("id").primary();
    //info of flight
    flights.date("flightDate"); //date of flight
    flights.string("flightName", 32).notNullable(); //flight name
    flights.string("airports"); //routes, from and to
    flights.string("skyVector", 512); // skyvector snipet
    flights.string("remarks", 512); //notes on flight
    flights.float("total", 3, 2); // total duration of flight
    //procedures
    flights.integer("numOfTakeOffs"); // takeoffs
    flights.integer("numOfLandings"); // landings
    //aricraft category
    flights.float("SEL"); // single engine land
    flights.float("MEL"); // multi engine land
    //conditions of flight
    flights.float("dayHours", 3, 2); //day
    flights.float("nightHours", 3, 2); //night
    flights.float("actInstruments", 3, 2); //actual inst
    flights.float("simInstruments", 3, 2); //sim inst (hood)
    flights.float("groundTrainer", 3, 2); //ground sim
    //type of piloting time
    flights.float("crossCountry", 3, 2); //cross country
    flights.float("asInstructor", 3, 2); // as instructor
    flights.float("dualReceived", 3, 2); //dual rec. (dual received) float
    flights.float("pilotInCommand", 3, 2); //pic (pilot in command) float

    //foreign key to pilot
    flights
      .string("pilotsUID")
      .notNullable()
      .references("pilots.UID");
    //foreign key to airplane
    flights
      .integer("airplanesID")
      .unsigned()
      .notNullable()
      .references("airplanes.id");
    //foreign key to instructor
    flights
      .integer("instructorsID")
      .unsigned()
      .references("instructors.id");
    //airplane model references airplanes.model (required)
    //airplane tailNumber references airplanes.tailNumber (required)
    //instructor name references instructors.name
    //instuctor license references instructors.licenseNum
  });
};

//float
//precision The total number of digits in a decimal number, both before and after the decimal point.
//scale The total number of digits after the decimal point in a number.

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("flights");
};
