const db = require("../dbConfig");
const table = "instructors";

module.exports = {
  // get: () => db(table),
  get: (UID, id) => {
    let query = db("instructors")
      .join("pilots", "instructors.pilotsUID", "=", "pilots.UID")
      .select(
        "instructors.id",
        "instructors.name",
        "instructors.licenseNum",
        "instructors.notes",
        "instructors.ratings",
        "instructors.contactInfo"
      )
      .where("pilots.UID", UID);
    if (id) {
      query.where("instructors.id", id);
    }
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
