exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("airplanes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("airplanes").insert([
        {
          id: 1,
          tailNumber: 43795,
          make: "Piper",
          model: "Cherokee",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 2,
          tailNumber: 11640,
          make: "Piper",
          model: "A320",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 3,
          tailNumber: 60411,
          make: "Beechcraft",
          model: "Cub",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 4,
          tailNumber: 12111,
          make: "Boeing",
          model: "A380",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 5,
          tailNumber: 6332,
          make: "Airbus",
          model: "172",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 6,
          tailNumber: 78251,
          make: "Piper",
          model: "777",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 7,
          tailNumber: 69603,
          make: "Beechcraft",
          model: "777",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 8,
          tailNumber: 48597,
          make: "Diamond",
          model: "152",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 9,
          tailNumber: 30178,
          make: "Piper",
          model: "182",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 10,
          tailNumber: 1809,
          make: "Beechcraft",
          model: "Cub",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 11,
          tailNumber: 98162,
          make: "Cessna",
          model: "A330",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 12,
          tailNumber: 96378,
          make: "Beechcraft",
          model: "A320",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 13,
          tailNumber: 52688,
          make: "Boeing",
          model: "747",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 14,
          tailNumber: 41642,
          make: "Cessna",
          model: "A320",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 15,
          tailNumber: 60884,
          make: "Piper",
          model: "Cherokee",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 16,
          tailNumber: 25004,
          make: "Boeing",
          model: "737",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 17,
          tailNumber: 65531,
          make: "Airbus",
          model: "182",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 18,
          tailNumber: 50075,
          make: "Cessna",
          model: "Cherokee",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 19,
          tailNumber: 26158,
          make: "Piper",
          model: "747",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 20,
          tailNumber: 81073,
          make: "Cessna",
          model: "A320",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 21,
          tailNumber: 9183,
          make: "Diamond",
          model: "182",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 22,
          tailNumber: 34104,
          make: "Boeing",
          model: "A320",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 23,
          tailNumber: 76324,
          make: "Piper",
          model: "Cherokee",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 24,
          tailNumber: 3506,
          make: "Piper",
          model: "Bonanza",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 25,
          tailNumber: 57260,
          make: "Airbus",
          model: "737",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 26,
          tailNumber: 34867,
          make: "Cessna",
          model: "747",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 27,
          tailNumber: 24593,
          make: "Cessna",
          model: "747",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 28,
          tailNumber: 82130,
          make: "Boeing",
          model: "152",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 29,
          tailNumber: 35251,
          make: "Boeing",
          model: "A320",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 30,
          tailNumber: 8698,
          make: "Airbus",
          model: "737",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 31,
          tailNumber: 71006,
          make: "Beechcraft",
          model: "182",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 32,
          tailNumber: 93896,
          make: "Boeing",
          model: "A320",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 33,
          tailNumber: 47206,
          make: "Diamond",
          model: "152",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 34,
          tailNumber: 85404,
          make: "Piper",
          model: "Bonanza",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 35,
          tailNumber: 4401,
          make: "Beechcraft",
          model: "Cherokee",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 36,
          tailNumber: 6182,
          make: "Beechcraft",
          model: "A380",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 37,
          tailNumber: 52342,
          make: "Boeing",
          model: "172",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 38,
          tailNumber: 95357,
          make: "Diamond",
          model: "172",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 39,
          tailNumber: 96860,
          make: "Boeing",
          model: "A320",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 40,
          tailNumber: 28443,
          make: "Piper",
          model: "Bonanza",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 41,
          tailNumber: 49683,
          make: "Piper",
          model: "182",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 42,
          tailNumber: 31946,
          make: "Beechcraft",
          model: "777",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 43,
          tailNumber: 61220,
          make: "Boeing",
          model: "Cub",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 44,
          tailNumber: 9386,
          make: "Boeing",
          model: "777",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 45,
          tailNumber: 81902,
          make: "Piper",
          model: "182",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 46,
          tailNumber: 30350,
          make: "Airbus",
          model: "152",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 47,
          tailNumber: 7097,
          make: "Cessna",
          model: "Bonanza",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 48,
          tailNumber: 98084,
          make: "Airbus",
          model: "747",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 49,
          tailNumber: 55377,
          make: "Airbus",
          model: "152",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 50,
          tailNumber: 52905,
          make: "Boeing",
          model: "Cherokee",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 51,
          tailNumber: 65365,
          make: "Boeing",
          model: "737",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 52,
          tailNumber: 81799,
          make: "Airbus",
          model: "777",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 53,
          tailNumber: 24037,
          make: "Beechcraft",
          model: "737",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 54,
          tailNumber: 75476,
          make: "Boeing",
          model: "777",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 55,
          tailNumber: 65649,
          make: "Cessna",
          model: "A380",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 56,
          tailNumber: 64266,
          make: "Cessna",
          model: "747",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 57,
          tailNumber: 79549,
          make: "Diamond",
          model: "182",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 58,
          tailNumber: 43814,
          make: "Boeing",
          model: "A380",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 59,
          tailNumber: 11538,
          make: "Boeing",
          model: "182",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 60,
          tailNumber: 84274,
          make: "Airbus",
          model: "737",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 61,
          tailNumber: 96680,
          make: "Boeing",
          model: "A330",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 62,
          tailNumber: 7607,
          make: "Piper",
          model: "Bonanza",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 63,
          tailNumber: 83806,
          make: "Cessna",
          model: "747",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 64,
          tailNumber: 35314,
          make: "Diamond",
          model: "Bonanza",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 65,
          tailNumber: 1218,
          make: "Diamond",
          model: "A380",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 66,
          tailNumber: 25777,
          make: "Cessna",
          model: "Cherokee",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 67,
          tailNumber: 86079,
          make: "Boeing",
          model: "172",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 68,
          tailNumber: 87154,
          make: "Diamond",
          model: "Cub",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 69,
          tailNumber: 26847,
          make: "Cessna",
          model: "737",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 70,
          tailNumber: 67100,
          make: "Diamond",
          model: "A330",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 71,
          tailNumber: 37139,
          make: "Piper",
          model: "A380",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 72,
          tailNumber: 84413,
          make: "Diamond",
          model: "152",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 73,
          tailNumber: 89546,
          make: "Airbus",
          model: "172",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 74,
          tailNumber: 38508,
          make: "Diamond",
          model: "Cherokee",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 75,
          tailNumber: 38565,
          make: "Beechcraft",
          model: "182",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 76,
          tailNumber: 18179,
          make: "Cessna",
          model: "737",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 77,
          tailNumber: 45433,
          make: "Beechcraft",
          model: "A330",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 78,
          tailNumber: 35917,
          make: "Piper",
          model: "737",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 79,
          tailNumber: 71490,
          make: "Airbus",
          model: "Cherokee",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 80,
          tailNumber: 79883,
          make: "Boeing",
          model: "182",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 81,
          tailNumber: 81838,
          make: "Beechcraft",
          model: "737",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 82,
          tailNumber: 32129,
          make: "Diamond",
          model: "Bonanza",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 83,
          tailNumber: 34230,
          make: "Diamond",
          model: "182",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 84,
          tailNumber: 52656,
          make: "Piper",
          model: "777",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 85,
          tailNumber: 27284,
          make: "Airbus",
          model: "747",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 86,
          tailNumber: 92236,
          make: "Beechcraft",
          model: "Cherokee",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 87,
          tailNumber: 68059,
          make: "Beechcraft",
          model: "A320",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 88,
          tailNumber: 71101,
          make: "Beechcraft",
          model: "777",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 89,
          tailNumber: 9884,
          make: "Beechcraft",
          model: "777",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 90,
          tailNumber: 91406,
          make: "Beechcraft",
          model: "182",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 91,
          tailNumber: 55170,
          make: "Diamond",
          model: "A380",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 92,
          tailNumber: 26156,
          make: "Beechcraft",
          model: "152",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 93,
          tailNumber: 68590,
          make: "Beechcraft",
          model: "Bonanza",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 94,
          tailNumber: 11869,
          make: "Boeing",
          model: "737",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 95,
          tailNumber: 56774,
          make: "Cessna",
          model: "Cub",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 96,
          tailNumber: 10727,
          make: "Beechcraft",
          model: "777",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 97,
          tailNumber: 40477,
          make: "Boeing",
          model: "182",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 98,
          tailNumber: 15761,
          make: "Diamond",
          model: "737",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 99,
          tailNumber: 8328,
          make: "Piper",
          model: "A330",
          category: "SEL",
          pilotsUID: "583-78-0825"
        },
        {
          id: 100,
          tailNumber: 82738,
          make: "Diamond",
          model: "747",
          category: "SEL",
          pilotsUID: "583-78-0825"
        }
      ]);
    });
};
