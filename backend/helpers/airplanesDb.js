const db = require("../dbConfig");
const table = "airplanes";

module.exports = {
  get: () => db(table),
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
