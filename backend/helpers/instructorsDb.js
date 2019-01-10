const dB= require('../dbConfig');
const table= 'instructors';
module.exports = {
    get: () => dB(table),
    insert: data => dB(table).insert(data),
    update: (id, data) =>
      dB(table)
        .where("id", id)
        .update(data),
    remove: id =>
      dB(table)
        .where("id", id)
        .del()
  };