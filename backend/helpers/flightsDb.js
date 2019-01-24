const db = require("../dbConfig");
const table = "flights";

module.exports = {
  // get: () => db(table),
  get: id => {
    let query = db("flights")
      .join("pilots", "flights.pilotsID", "=", "pilots.id")
      .select(
        "flights.id",
        "flights.flightDate",
        "flights.flightName",
        "flights.airports",
        "flights.remarks",
        "flights.total",
        "flights.numOfTakeOffs",
        "flights.numOfLandings",
        "flights.SEL",
        "flights.MEL",
        "flights.dayHours",
        "flights.nightHours",
        "flights.actInstruments",
        "flights.simInstruments",
        "flights.groundTrainer",
        "flights.crossCountry",
        "flights.asInstructor",
        "flights.dualReceived",
        "flights.pilotInCommand"
      )
      .where("pilots.id", id);
    return query;
  },
  insert: flight => db(table).insert(flight),
  update: (id, flight) =>
    db(table)
      .where("id", id)
      .update(flight),
  remove: id =>
    db(table)
      .where("id", id)
      .del()
};
