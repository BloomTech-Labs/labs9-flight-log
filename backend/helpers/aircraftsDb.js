const db = require("../dbConfig");
const table = "aircrafts";

module.exports = {
  get: () => db(table),
  insert: aircraft => db(table).insert(aircraft),
  update: (id, aircraft) =>
    db(table)
      .where("id", id)
      .update(aircraft),
  remove: id =>
    db(table)
      .where("id", id)
      .del()
};
