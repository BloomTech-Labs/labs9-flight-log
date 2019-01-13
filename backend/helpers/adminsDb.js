const db = require("../dbConfig");
const table = "admins";

module.exports = {
  get: () => db(table),
  insert: admin => db(table).insert(admin),
  update: (id, admin) =>
    db(table)
      .where("id", id)
      .update(admin),
  remove: id =>
    db(table)
      .where("id", id)
      .del()
};
