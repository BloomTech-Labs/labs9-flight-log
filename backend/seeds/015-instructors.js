exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("instructors")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("instructors").insert([
        {
          id: 1,
          name: "Xena Grgic",
          licenseNum: 51871317495594,
          notes: "Monitored zero administration strategy",
          ratings: "MEI",
          contactInfo: "xgrgic0@slashdot.org",
          pilotsUID: "583-78-0825"
        },
        {
          id: 2,
          name: "Torrence Vernay",
          licenseNum: 69966258946985,
          notes: "Self-enabling mission-critical knowledge base",
          ratings: "MEI",
          contactInfo: "tvernay1@paypal.com",
          pilotsUID: "583-78-0825"
        },
        {
          id: 3,
          name: "Shannon Sheppey",
          licenseNum: 58298014345483,
          notes: "Cloned user-facing monitoring",
          ratings: "CFII",
          contactInfo: "ssheppey2@flavors.me",
          pilotsUID: "583-78-0825"
        },
        {
          id: 4,
          name: "Cherilyn Osmint",
          licenseNum: 90621667061823,
          notes: "Multi-tiered zero defect core",
          ratings: "CFII",
          contactInfo: "cosmint3@phoca.cz",
          pilotsUID: "583-78-0825"
        },
        {
          id: 5,
          name: "Mercy Wynch",
          licenseNum: 37514080690702,
          notes: "Secured next generation architecture",
          ratings: "CFII",
          contactInfo: "mwynch4@prnewswire.com",
          pilotsUID: "583-78-0825"
        },
        {
          id: 6,
          name: "Willey Cruse",
          licenseNum: 60106244846378,
          notes: "Ameliorated upward-trending orchestration",
          ratings: "CFII",
          contactInfo: "wcruse5@bluehost.com",
          pilotsUID: "583-78-0825"
        },
        {
          id: 7,
          name: "Glyn Bezzant",
          licenseNum: 37183906440605,
          notes: "Object-based scalable instruction set",
          ratings: null,
          contactInfo: "gbezzant6@ca.gov",
          pilotsUID: "583-78-0825"
        },
        {
          id: 8,
          name: "Corey Ashwood",
          licenseNum: 39736539102795,
          notes: "Networked multimedia flexibility",
          ratings: "MEI",
          contactInfo: "cashwood7@twitpic.com",
          pilotsUID: "583-78-0825"
        },
        {
          id: 9,
          name: "Alejandra Bozworth",
          licenseNum: 35014477598574,
          notes: null,
          ratings: "MEI",
          contactInfo: "abozworth8@symantec.com",
          pilotsUID: "583-78-0825"
        },
        {
          id: 10,
          name: "Rab Stainland",
          licenseNum: 77403137221351,
          notes: "Front-line 4th generation groupware",
          ratings: "CFI",
          contactInfo: "rstainland9@va.gov",
          pilotsUID: "583-78-0825"
        },
        {
          id: 11,
          name: "Nanci Druhan",
          licenseNum: 99041103196101,
          notes: "Mandatory exuding software",
          ratings: "MEI",
          contactInfo: "ndruhana@discovery.com",
          pilotsUID: "583-78-0825"
        },
        {
          id: 12,
          name: "Nealson Pentecust",
          licenseNum: 38681916054460,
          notes: "Secured web-enabled implementation",
          ratings: "MEI",
          contactInfo: "npentecustb@addthis.com",
          pilotsUID: "583-78-0825"
        },
        {
          id: 13,
          name: "Merissa Joblin",
          licenseNum: 70295652752298,
          notes: "Versatile heuristic Graphical User Interface",
          ratings: "CFI",
          contactInfo: "mjoblinc@patch.com",
          pilotsUID: "583-78-0825"
        },
        {
          id: 14,
          name: "Elbert Stedmond",
          licenseNum: 2113622752698,
          notes: "Front-line modular challenge",
          ratings: "MEI",
          contactInfo: "estedmondd@multiply.com",
          pilotsUID: "583-78-0825"
        },
        {
          id: 15,
          name: "Hyacintha Tambling",
          licenseNum: 56300486035637,
          notes: "Digitized zero tolerance leverage",
          ratings: "CFI",
          contactInfo: "htamblinge@digg.com",
          pilotsUID: "583-78-0825"
        },
        {
          id: 16,
          name: "Rock Chadwen",
          licenseNum: 5612600459781,
          notes: "Mandatory interactive utilisation",
          ratings: "MEI",
          contactInfo: "rchadwenf@csmonitor.com",
          pilotsUID: "583-78-0825"
        },
        {
          id: 17,
          name: "Izabel Stallan",
          licenseNum: 17890254245670,
          notes: "Robust impactful ability",
          ratings: "CFII",
          contactInfo: "istallang@eepurl.com",
          pilotsUID: "583-78-0825"
        },
        {
          id: 18,
          name: "Percival De Paepe",
          licenseNum: 30247831693608,
          notes: "Fundamental real-time functionalities",
          ratings: "MEI",
          contactInfo: "pdeh@themeforest.net",
          pilotsUID: "583-78-0825"
        },
        {
          id: 19,
          name: "Regan Pollastro",
          licenseNum: 4705708160981,
          notes: "Assimilated 4th generation attitude",
          ratings: "CFI",
          contactInfo: "rpollastroi@statcounter.com",
          pilotsUID: "583-78-0825"
        },
        {
          id: 20,
          name: "Scarface Cutten",
          licenseNum: 83493860797632,
          notes: "Virtual exuding attitude",
          ratings: "MEI",
          contactInfo: "scuttenj@zimbio.com",
          pilotsUID: "583-78-0825"
        },
        {
          id: 21,
          name: "Balduin Greatbank",
          licenseNum: 14308132969502,
          notes: "Expanded explicit throughput",
          ratings: "MEI",
          contactInfo: "bgreatbankk@gov.uk",
          pilotsUID: "583-78-0825"
        },
        {
          id: 22,
          name: "Drugi Dandy",
          licenseNum: 18909053048257,
          notes: "Phased 3rd generation matrices",
          ratings: "CFII",
          contactInfo: "ddandyl@foxnews.com",
          pilotsUID: "583-78-0825"
        },
        {
          id: 23,
          name: "Brice Vedyaev",
          licenseNum: 25872556029485,
          notes: "Expanded solution-oriented forecast",
          ratings: "CFII",
          contactInfo: "bvedyaevm@mit.edu",
          pilotsUID: "583-78-0825"
        },
        {
          id: 24,
          name: "Ardene Stavers",
          licenseNum: 67027170163349,
          notes: "Up-sized intermediate moratorium",
          ratings: "CFII",
          contactInfo: "astaversn@whitehouse.gov",
          pilotsUID: "583-78-0825"
        },
        {
          id: 25,
          name: "Brennen Ebbetts",
          licenseNum: 98653379456502,
          notes: "Fundamental human-resource throughput",
          ratings: "CFII",
          contactInfo: "bebbettso@yolasite.com",
          pilotsUID: "583-78-0825"
        }
      ]);
    });
};
