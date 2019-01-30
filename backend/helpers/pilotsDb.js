const db = require("../dbConfig");
const table = "pilots";

module.exports = {
  get: (UID, path) => {
    console.log("path", path);
    if (UID) {
      console.log(UID);
      let query = db(table).where("pilots.UID", UID);
      if (path && path === "airplanes") {
        query = db(table)
          .join("airplanes", "airplanes.pilotsUID", "=", "pilots.UID")
          .select("airplanes.id", "airplanes.tailNumber", "airplanes.model")
          .where("pilots.UID", UID);
        return query;
      }
      if (path && path === "instructors") {
        query = db(table)
          .join("instructors", "instructors.pilotsUID", "=", "pilots.UID")
          .select(
            "instructors.id",
            "instructors.name",
            "instructors.licenseNum"
          )
          .where("pilots.UID", UID);
        return query;
      }
      return query;
    }
    return db(table);
  },
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
