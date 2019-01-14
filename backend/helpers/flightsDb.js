const db = require("../dbConfig");
const table = "flights";

module.exports = {
  get: () => db(table),
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
