const db = require("../dbConfig");
const table = "pilots";

module.exports = {
  get: (access, UID, path) => {
    // console.log("access", access);
    if (access === "signin") {
      console.log("access", access);
      return db(table);
    }
    if (UID) {
      console.log("uid", UID);
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
