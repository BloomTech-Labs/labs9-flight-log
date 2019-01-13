const db = require("../dbConfig");
const table = "instructors";

module.exports = {
  get: () => db(table),
  insert: instructor => db(table).insert(instructor),
  update: (id, instructor) =>
    db(table)
      .where("id", id)
      .update(instructor),
  remove: id =>
    db(table)
      .where("id", id)
      .del()
};
