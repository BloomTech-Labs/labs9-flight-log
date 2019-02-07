const db = require("../dbConfig");
const table = "airplanes";

// module.exports = {
//   get: () => db(table),
//   insert: airplane => db(table).insert(airplane),
//   update: (id, airplane) =>
//     db(table)
//       .where("id", id)
//       .update(airplane),
//   remove: id =>
//     db(table)
//       .where("id", id)
//       .del()
// };
module.exports = {
  // get: id => {
  //   let query = db(airplanes).where(airplanes.id, id);
  // .join(pilots, airplanes.pilotsID, "=", pilots.id)
  // .select(airplanes.id, airplanes.tailNumber)
  // .where(airplanes.pilotsID, id);
  // return query;
  // },
  // get: id => {
  //   let query = db("pilots")
  //     .join("airplanes", "pilots.id", "=", "airplanes.pilotsID")
  //     .select("pilots.id", "airplanes.tailNumber")
  //     .where("pilots.id", id);
  //   return query;
  // },

  get: (UID, id) => {
    let query = db("airplanes")
      .join("pilots", "airplanes.pilotsUID", "=", "pilots.UID")
      .select(
        "airplanes.id",
        "airplanes.tailNumber",
        "airplanes.make",
        "airplanes.model",
        "airplanes.category",
        "airplanes.imageName"
      )
      .where("pilots.UID", UID);
    if (id) {
      query = db("airplanes")
        .where("airplanes.id", id)
        .join("flights", "flights.airplanesID", "=", "airplanes.id")
        .select("airplanes.imageName")
        .sum({
          totalTakeOffs: "flights.numOfTakeOffs"
        })
        .sum({
          totalLandings: "flights.numOfLandings"
        })
        .sum({
          totalSEL: "flights.SEL"
        })
        .sum({
          totalMEL: "flights.MEL"
        })
        .sum({
          totalDay: "flights.dayHours"
        })
        .sum({
          totalNight: "flights.nightHours"
        })
        .sum({
          totalActInstruments: "flights.actInstruments"
        })
        .sum({
          totalSimInstruments: "flights.simInstruments"
        })
        .sum({
          totalGroundTrainer: "flights.groundTrainer"
        })
        .sum({
          totalCrossCountry: "flights.crossCountry"
        })
        .sum({
          totalAsInstructor: "flights.asInstructor"
        })
        .sum({
          totalDualReceived: "flights.dualReceived"
        })
        .sum({
          totalPilotInCommand: "flights.pilotInCommand"
        })
        .sum({
          totalHours: "flights.total"
        });
    }
    return query;
  },

  insert: airplane => db(table).insert(airplane),
  update: (id, airplane) =>
    db(table)
      .where("id", id)
      .update(airplane),
  remove: id =>
    db(table)
      .where("id", id)
      .del()
};
