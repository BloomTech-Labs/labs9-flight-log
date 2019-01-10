const pilotsDb = require("../dbConfig");

module.exports = {
  get: () => pilotsDb("pilots"),
  insert: pilot => pilotsDb("pilots").insert(pilot),
  update: (id, pilot) =>
    pilotsDb("pilots")
      .where("id", id)
      .update(pilot),
  remove: id =>
    pilotsDb("pilots")
      .where("id", id)
      .del()
};
