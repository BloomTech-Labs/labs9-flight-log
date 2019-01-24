const db = require("../dbConfig");
const table = "instructors";

module.exports = {
  // get: () => db(table),
  get: id => {
    let query = db("instructors")
      .join("pilots", "instructors.pilotsID", "=", "pilots.id")
      .select(
        "instructors.id",
        "instructors.name",
        "instructors.licenseNum",
        "instructors.notes",
        "instructors.ratings",
        "instructors.contactInfo"
      )
      .where("pilots.id", id);
    return query;
  },
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
