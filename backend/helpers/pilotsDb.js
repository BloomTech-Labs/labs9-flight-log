const db = require("../dbConfig");
const table = "pilots";

module.exports = {
  get: () => db(table),
  insert: pilot => db(table).insert(pilot),
  update: (id, pilot) =>
    db(table)
      .where("id", id)
      .update(pilot),
  remove: id =>
    db(table)
      .where("id", id)
      .del()
};
