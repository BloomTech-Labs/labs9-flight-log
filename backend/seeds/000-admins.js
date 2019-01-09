exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("admins")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("admins").insert([
        { id: 1, firstName: "Mark", lastName: "Hermansen" },
        { id: 2, firstName: "Wanda", lastName: "Evans" },
        { id: 3, firstName: "Quan", lastName: "Nguyen" },
        { id: 4, firstName: "Steve", lastName: "Smodish" },
        { id: 5, firstName: "Trevor", lastName: "Lewis" },
        { id: 6, firstName: "Jeff", lastName: "Kang" }
      ]);
    });
};
