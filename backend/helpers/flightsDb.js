const db = require("../dbConfig");
const table = "flights";

module.exports = {
  // get: () => db(table),
  get: (UID, total) => {
    let query = db("flights")
      .join("pilots", "flights.pilotsUID", "=", "pilots.UID")
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
        "flights.pilotInCommand",
        "flights.skyVector",
        "flights.airplanesID",
        "flights.instructorsID"
      )
      .where("pilots.UID", UID);
    if (total) {
      query = db("flights")
        .join("pilots", "flights.pilotsUID", "=", "pilots.UID")
        .sum({
          totalTakeOffs: "numOfTakeOffs"
        })
        .sum({
          totalLandings: "numOfLandings"
        })
        .sum({
          totalSEL: "SEL"
        })
        .sum({
          totalMEL: "MEL"
        })
        .sum({
          totalDay: "dayHours"
        })
        .sum({
          totalNight: "nightHours"
        })
        .sum({
          totalActInstruments: "actInstruments"
        })
        .sum({
          totalSimInstruments: "simInstruments"
        })
        .sum({
          totalGroundTrainer: "groundTrainer"
        })
        .sum({
          totalCrossCountry: "crossCountry"
        })
        .sum({
          totalAsInstructor: "asInstructor"
        })
        .sum({
          totalDualReceived: "dualReceived"
        })
        .sum({
          totalPilotInCommand: "pilotInCommand"
        })
        .sum({
          totalHours: "total"
        })
        .where("pilots.UID", UID);
    }
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
