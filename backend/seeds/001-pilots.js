exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("pilots")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("pilots").insert([
        {
          id: 1,
          firstName: "Helen",
          lastName: "Fries",
          isPaid: false,
          UID: "1"
        },
        {
          id: 2,
          firstName: "Elfrida",
          lastName: "Dory",
          isPaid: true,
          UID: "2"
        },
        {
          id: 3,
          firstName: "Dulciana",
          lastName: "Whitefoot",
          isPaid: false,
          UID: "583-78-0825"
        },
        {
          id: 4,
          firstName: "Beitris",
          lastName: "Wilcher",
          isPaid: true,
          UID: "417-12-3377"
        },
        {
          id: 5,
          firstName: "Armando",
          lastName: "Beetham",
          isPaid: true,
          UID: "102-53-8248"
        },
        {
          id: 6,
          firstName: "Tatiana",
          lastName: "Rablan",
          isPaid: true,
          UID: "539-06-7927"
        },
        {
          id: 7,
          firstName: "Briney",
          lastName: "Duesbury",
          isPaid: true,
          UID: "742-90-0978"
        },
        {
          id: 8,
          firstName: "Weylin",
          lastName: "Cuttell",
          isPaid: false,
          UID: "745-19-9069"
        },
        {
          id: 9,
          firstName: "Gusti",
          lastName: "Jarrad",
          isPaid: true,
          UID: "872-02-5920"
        },
        {
          id: 10,
          firstName: "Clemmy",
          lastName: "Doleman",
          isPaid: false,
          UID: "823-20-3565"
        },
        {
          id: 11,
          firstName: "Jaclin",
          lastName: "Inett",
          isPaid: false,
          UID: "716-71-7255"
        },
        {
          id: 12,
          firstName: "Nikita",
          lastName: "Puttan",
          isPaid: true,
          UID: "295-16-4218"
        },
        {
          id: 13,
          firstName: "Raff",
          lastName: "Bouzek",
          isPaid: false,
          UID: "779-87-3995"
        },
        {
          id: 14,
          firstName: "Steffi",
          lastName: "Adenet",
          isPaid: false,
          UID: "540-74-8655"
        },
        {
          id: 15,
          firstName: "Matti",
          lastName: "Bleacher",
          isPaid: false,
          UID: "887-06-3481"
        },
        {
          id: 16,
          firstName: "Karin",
          lastName: "Shimmans",
          isPaid: true,
          UID: "189-99-1876"
        },
        {
          id: 17,
          firstName: "Kaylil",
          lastName: "Harbison",
          isPaid: true,
          UID: "535-52-6200"
        },
        {
          id: 18,
          firstName: "Valaree",
          lastName: "Thebeau",
          isPaid: false,
          UID: "482-66-8125"
        },
        {
          id: 19,
          firstName: "Melisandra",
          lastName: "Bere",
          isPaid: true,
          UID: "663-93-8223"
        },
        {
          id: 20,
          firstName: "Bendicty",
          lastName: "Dunrige",
          isPaid: false,
          UID: "373-49-7542"
        },
        {
          id: 21,
          firstName: "Shara",
          lastName: "Aleshkov",
          isPaid: false,
          UID: "493-27-3223"
        },
        {
          id: 22,
          firstName: "Walton",
          lastName: "Brumble",
          isPaid: true,
          UID: "139-76-0284"
        },
        {
          id: 23,
          firstName: "Ky",
          lastName: "Wyldish",
          isPaid: false,
          UID: "569-53-1633"
        },
        {
          id: 24,
          firstName: "Ethelbert",
          lastName: "Amys",
          isPaid: false,
          UID: "259-34-5188"
        },
        {
          id: 25,
          firstName: "Hewett",
          lastName: "Gatlin",
          isPaid: false,
          UID: "891-16-6842"
        },
        {
          id: 26,
          firstName: "Andriette",
          lastName: "Taberer",
          isPaid: true,
          UID: "186-84-3631"
        },
        {
          id: 27,
          firstName: "Caddric",
          lastName: "Kightly",
          isPaid: true,
          UID: "553-96-4960"
        },
        {
          id: 28,
          firstName: "Meredith",
          lastName: "Merrick",
          isPaid: false,
          UID: "189-78-7183"
        },
        {
          id: 29,
          firstName: "Carlotta",
          lastName: "Colum",
          isPaid: false,
          UID: "335-34-7251"
        },
        {
          id: 30,
          firstName: "Arda",
          lastName: "Fihelly",
          isPaid: false,
          UID: "343-10-0899"
        },
        {
          id: 31,
          firstName: "Avigdor",
          lastName: "Gerhts",
          isPaid: false,
          UID: "886-61-6170"
        },
        {
          id: 32,
          firstName: "Leslie",
          lastName: "Headings",
          isPaid: true,
          UID: "543-74-5560"
        },
        {
          id: 33,
          firstName: "Fred",
          lastName: "Nealy",
          isPaid: false,
          UID: "852-06-1314"
        },
        {
          id: 34,
          firstName: "Gerianna",
          lastName: "Boost",
          isPaid: false,
          UID: "871-28-5616"
        },
        {
          id: 35,
          firstName: "Henrie",
          lastName: "Lethardy",
          isPaid: true,
          UID: "575-57-5751"
        },
        {
          id: 36,
          firstName: "Dare",
          lastName: "Pyecroft",
          isPaid: true,
          UID: "708-10-6221"
        },
        {
          id: 37,
          firstName: "Kele",
          lastName: "Gatrill",
          isPaid: false,
          UID: "288-67-7047"
        },
        {
          id: 38,
          firstName: "Moselle",
          lastName: "Blumire",
          isPaid: true,
          UID: "140-30-2326"
        },
        {
          id: 39,
          firstName: "Skipper",
          lastName: "Luetkemeyers",
          isPaid: false,
          UID: "383-25-9652"
        },
        {
          id: 40,
          firstName: "Valle",
          lastName: "Jezzard",
          isPaid: false,
          UID: "885-02-5132"
        },
        {
          id: 41,
          firstName: "Cathrine",
          lastName: "MattiCCI",
          isPaid: true,
          UID: "819-68-9387"
        },
        {
          id: 42,
          firstName: "Norton",
          lastName: "Drinnan",
          isPaid: false,
          UID: "139-38-6018"
        },
        {
          id: 43,
          firstName: "Natala",
          lastName: "Ciccone",
          isPaid: false,
          UID: "851-78-2482"
        },
        {
          id: 44,
          firstName: "Clevie",
          lastName: "Riddington",
          isPaid: false,
          UID: "736-28-2599"
        },
        {
          id: 45,
          firstName: "Maddie",
          lastName: "Grishechkin",
          isPaid: true,
          UID: "860-03-4501"
        },
        {
          id: 46,
          firstName: "Harli",
          lastName: "Flowers",
          isPaid: false,
          UID: "498-01-6586"
        },
        {
          id: 47,
          firstName: "Carmina",
          lastName: "Miller",
          isPaid: false,
          UID: "687-75-3103"
        },
        {
          id: 48,
          firstName: "Marina",
          lastName: "Gueinn",
          isPaid: true,
          UID: "594-38-1022"
        },
        {
          id: 49,
          firstName: "Kelsi",
          lastName: "Gringley",
          isPaid: false,
          UID: "557-85-2144"
        },
        {
          id: 50,
          firstName: "Tatiana",
          lastName: "Crop",
          isPaid: false,
          UID: "670-22-3202"
        },
        {
          id: 51,
          firstName: "Oberon",
          lastName: "Schimaschke",
          isPaid: true,
          UID: "399-04-0707"
        },
        {
          id: 52,
          firstName: "Laure",
          lastName: "Coulton",
          isPaid: true,
          UID: "826-08-9281"
        },
        {
          id: 53,
          firstName: "Adham",
          lastName: "Dockery",
          isPaid: false,
          UID: "682-13-0490"
        },
        {
          id: 54,
          firstName: "Lorrin",
          lastName: "Geillier",
          isPaid: true,
          UID: "283-29-1751"
        },
        {
          id: 55,
          firstName: "Merola",
          lastName: "Jeavons",
          isPaid: false,
          UID: "255-06-4980"
        },
        {
          id: 56,
          firstName: "Jacki",
          lastName: "De Cristofalo",
          isPaid: false,
          UID: "438-85-5873"
        },
        {
          id: 57,
          firstName: "Channa",
          lastName: "Bertelmot",
          isPaid: false,
          UID: "286-47-5864"
        },
        {
          id: 58,
          firstName: "Beryle",
          lastName: "Le Brun",
          isPaid: false,
          UID: "842-40-2364"
        },
        {
          id: 59,
          firstName: "Carling",
          lastName: "Peret",
          isPaid: true,
          UID: "230-91-8741"
        },
        {
          id: 60,
          firstName: "Pryce",
          lastName: "Lattos",
          isPaid: true,
          UID: "538-36-6327"
        },
        {
          id: 61,
          firstName: "Kassie",
          lastName: "Blanchflower",
          isPaid: true,
          UID: "290-12-3166"
        },
        {
          id: 62,
          firstName: "Ester",
          lastName: "Brambley",
          isPaid: true,
          UID: "800-45-2539"
        },
        {
          id: 63,
          firstName: "Jordan",
          lastName: "Lemin",
          isPaid: false,
          UID: "668-54-8574"
        },
        {
          id: 64,
          firstName: "Phoebe",
          lastName: "McClymont",
          isPaid: true,
          UID: "363-38-0768"
        },
        {
          id: 65,
          firstName: "Hastie",
          lastName: "Meo",
          isPaid: true,
          UID: "795-18-8901"
        },
        {
          id: 66,
          firstName: "Herbert",
          lastName: "Batchelor",
          isPaid: true,
          UID: "699-26-9606"
        },
        {
          id: 67,
          firstName: "Casar",
          lastName: "Grahlman",
          isPaid: true,
          UID: "529-26-4771"
        },
        {
          id: 68,
          firstName: "Shadow",
          lastName: "Karmel",
          isPaid: false,
          UID: "471-20-9291"
        },
        {
          id: 69,
          firstName: "Wolf",
          lastName: "Cansdill",
          isPaid: false,
          UID: "367-97-8517"
        },
        {
          id: 70,
          firstName: "Clemente",
          lastName: "Eagling",
          isPaid: true,
          UID: "375-68-7171"
        },
        {
          id: 71,
          firstName: "Anabelle",
          lastName: "Mewhirter",
          isPaid: false,
          UID: "891-57-3439"
        },
        {
          id: 72,
          firstName: "Filbert",
          lastName: "Starton",
          isPaid: true,
          UID: "638-07-3792"
        },
        {
          id: 73,
          firstName: "Odell",
          lastName: "Roxburch",
          isPaid: false,
          UID: "611-62-7482"
        },
        {
          id: 74,
          firstName: "Hadria",
          lastName: "Pestor",
          isPaid: false,
          UID: "299-82-3304"
        },
        {
          id: 75,
          firstName: "Franny",
          lastName: "Brunker",
          isPaid: false,
          UID: "519-93-0696"
        },
        {
          id: 76,
          firstName: "Nanni",
          lastName: "Raecroft",
          isPaid: true,
          UID: "657-58-1847"
        },
        {
          id: 77,
          firstName: "Arlette",
          lastName: "Banner",
          isPaid: true,
          UID: "802-10-1364"
        },
        {
          id: 78,
          firstName: "Morena",
          lastName: "Matyasik",
          isPaid: false,
          UID: "462-36-9835"
        },
        {
          id: 79,
          firstName: "Tedra",
          lastName: "Chappell",
          isPaid: false,
          UID: "121-51-6673"
        },
        {
          id: 80,
          firstName: "Shelly",
          lastName: "Arlet",
          isPaid: false,
          UID: "157-55-0934"
        },
        {
          id: 81,
          firstName: "Kelby",
          lastName: "Cregeen",
          isPaid: false,
          UID: "434-53-2394"
        },
        {
          id: 82,
          firstName: "Melitta",
          lastName: "Coiley",
          isPaid: false,
          UID: "771-79-6601"
        },
        {
          id: 83,
          firstName: "Mendy",
          lastName: "Marson",
          isPaid: true,
          UID: "547-83-5787"
        },
        {
          id: 84,
          firstName: "Melisenda",
          lastName: "Questier",
          isPaid: true,
          UID: "285-68-3747"
        },
        {
          id: 85,
          firstName: "Charisse",
          lastName: "Buxam",
          isPaid: false,
          UID: "459-87-4820"
        },
        {
          id: 86,
          firstName: "Janenna",
          lastName: "McAster",
          isPaid: true,
          UID: "400-23-2100"
        },
        {
          id: 87,
          firstName: "Gaby",
          lastName: "Sinkings",
          isPaid: false,
          UID: "428-50-1260"
        },
        {
          id: 88,
          firstName: "Alister",
          lastName: "Sheahan",
          isPaid: true,
          UID: "480-83-4690"
        },
        {
          id: 89,
          firstName: "Son",
          lastName: "Pranger",
          isPaid: false,
          UID: "400-05-0467"
        },
        {
          id: 90,
          firstName: "Glennis",
          lastName: "Mynett",
          isPaid: true,
          UID: "162-92-9747"
        },
        {
          id: 91,
          firstName: "Pietra",
          lastName: "Anersen",
          isPaid: true,
          UID: "584-18-5956"
        },
        {
          id: 92,
          firstName: "Randell",
          lastName: "Cato",
          isPaid: false,
          UID: "786-36-5440"
        },
        {
          id: 93,
          firstName: "Harwell",
          lastName: "Lehrian",
          isPaid: false,
          UID: "397-75-8688"
        },
        {
          id: 94,
          firstName: "Lula",
          lastName: "Chetwynd",
          isPaid: true,
          UID: "742-02-5003"
        },
        {
          id: 95,
          firstName: "Lu",
          lastName: "Calderwood",
          isPaid: false,
          UID: "395-99-9087"
        },
        {
          id: 96,
          firstName: "Keslie",
          lastName: "Lutz",
          isPaid: true,
          UID: "822-73-5396"
        },
        {
          id: 97,
          firstName: "Goldie",
          lastName: "Leguey",
          isPaid: true,
          UID: "605-30-3787"
        },
        {
          id: 98,
          firstName: "Gabriel",
          lastName: "Ablewhite",
          isPaid: true,
          UID: "589-43-8829"
        },
        {
          id: 99,
          firstName: "Gabbie",
          lastName: "Glaysher",
          isPaid: true,
          UID: "700-91-1297"
        },
        {
          id: 100,
          firstName: "Ilene",
          lastName: "Blethin",
          isPaid: false,
          UID: "528-63-1993"
        }
      ]);
    });
};
