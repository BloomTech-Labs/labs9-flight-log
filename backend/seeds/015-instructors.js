
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("instructors")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("instructors").insert([
        {
          "id": 1,
          "name": "Xena Grgic",
          "licenseNum": 51871317495594,
          "notes": "Monitored zero administration strategy",
          "ratings": "MEI",
          "contactInfo": "xgrgic0@slashdot.org"
        },
        {
          "id": 2,
          "name": "Torrence Vernay",
          "licenseNum": 69966258946985,
          "notes": "Self-enabling mission-critical knowledge base",
          "ratings": "MEI",
          "contactInfo": "tvernay1@paypal.com"
        },
        {
          "id": 3,
          "name": "Shannon Sheppey",
          "licenseNum": 58298014345483,
          "notes": "Cloned user-facing monitoring",
          "ratings": "CFII",
          "contactInfo": "ssheppey2@flavors.me"
        },
        {
          "id": 4,
          "name": "Cherilyn Osmint",
          "licenseNum": 90621667061823,
          "notes": "Multi-tiered zero defect core",
          "ratings": "CFII",
          "contactInfo": "cosmint3@phoca.cz"
        },
        {
          "id": 5,
          "name": "Mercy Wynch",
          "licenseNum": 37514080690702,
          "notes": "Secured next generation architecture",
          "ratings": "CFII",
          "contactInfo": "mwynch4@prnewswire.com"
        },
        {
          "id": 6,
          "name": "Willey Cruse",
          "licenseNum": 60106244846378,
          "notes": "Ameliorated upward-trending orchestration",
          "ratings": "CFII",
          "contactInfo": "wcruse5@bluehost.com"
        },
        {
          "id": 7,
          "name": "Glyn Bezzant",
          "licenseNum": 37183906440605,
          "notes": "Object-based scalable instruction set",
          "ratings": null,
          "contactInfo": "gbezzant6@ca.gov"
        },
        {
          "id": 8,
          "name": "Corey Ashwood",
          "licenseNum": 39736539102795,
          "notes": "Networked multimedia flexibility",
          "ratings": "MEI",
          "contactInfo": "cashwood7@twitpic.com"
        },
        {
          "id": 9,
          "name": "Alejandra Bozworth",
          "licenseNum": 35014477598574,
          "notes": null,
          "ratings": "MEI",
          "contactInfo": "abozworth8@symantec.com"
        },
        {
          "id": 10,
          "name": "Rab Stainland",
          "licenseNum": 77403137221351,
          "notes": "Front-line 4th generation groupware",
          "ratings": "CFI",
          "contactInfo": "rstainland9@va.gov"
        },
        {
          "id": 11,
          "name": "Nanci Druhan",
          "licenseNum": 99041103196101,
          "notes": "Mandatory exuding software",
          "ratings": "MEI",
          "contactInfo": "ndruhana@discovery.com"
        },
        {
          "id": 12,
          "name": "Nealson Pentecust",
          "licenseNum": 38681916054460,
          "notes": "Secured web-enabled implementation",
          "ratings": "MEI",
          "contactInfo": "npentecustb@addthis.com"
        },
        {
          "id": 13,
          "name": "Merissa Joblin",
          "licenseNum": 70295652752298,
          "notes": "Versatile heuristic Graphical User Interface",
          "ratings": "CFI",
          "contactInfo": "mjoblinc@patch.com"
        },
        {
          "id": 14,
          "name": "Elbert Stedmond",
          "licenseNum": 2113622752698,
          "notes": "Front-line modular challenge",
          "ratings": "MEI",
          "contactInfo": "estedmondd@multiply.com"
        },
        {
          "id": 15,
          "name": "Hyacintha Tambling",
          "licenseNum": 56300486035637,
          "notes": "Digitized zero tolerance leverage",
          "ratings": "CFI",
          "contactInfo": "htamblinge@digg.com"
        },
        {
          "id": 16,
          "name": "Rock Chadwen",
          "licenseNum": 5612600459781,
          "notes": "Mandatory interactive utilisation",
          "ratings": "MEI",
          "contactInfo": "rchadwenf@csmonitor.com"
        },
        {
          "id": 17,
          "name": "Izabel Stallan",
          "licenseNum": 17890254245670,
          "notes": "Robust impactful ability",
          "ratings": "CFII",
          "contactInfo": "istallang@eepurl.com"
        },
        {
          "id": 18,
          "name": "Percival De Paepe",
          "licenseNum": 30247831693608,
          "notes": "Fundamental real-time functionalities",
          "ratings": "MEI",
          "contactInfo": "pdeh@themeforest.net"
        },
        {
          "id": 19,
          "name": "Regan Pollastro",
          "licenseNum": 4705708160981,
          "notes": "Assimilated 4th generation attitude",
          "ratings": "CFI",
          "contactInfo": "rpollastroi@statcounter.com"
        },
        {
          "id": 20,
          "name": "Scarface Cutten",
          "licenseNum": 83493860797632,
          "notes": "Virtual exuding attitude",
          "ratings": "MEI",
          "contactInfo": "scuttenj@zimbio.com"
        },
        {
          "id": 21,
          "name": "Balduin Greatbank",
          "licenseNum": 14308132969502,
          "notes": "Expanded explicit throughput",
          "ratings": "MEI",
          "contactInfo": "bgreatbankk@gov.uk"
        },
        {
          "id": 22,
          "name": "Drugi Dandy",
          "licenseNum": 18909053048257,
          "notes": "Phased 3rd generation matrices",
          "ratings": "CFII",
          "contactInfo": "ddandyl@foxnews.com"
        },
        {
          "id": 23,
          "name": "Brice Vedyaev",
          "licenseNum": 25872556029485,
          "notes": "Expanded solution-oriented forecast",
          "ratings": "CFII",
          "contactInfo": "bvedyaevm@mit.edu"
        },
        {
          "id": 24,
          "name": "Ardene Stavers",
          "licenseNum": 67027170163349,
          "notes": "Up-sized intermediate moratorium",
          "ratings": "CFII",
          "contactInfo": "astaversn@whitehouse.gov"
        },
        {
          "id": 25,
          "name": "Brennen Ebbetts",
          "licenseNum": 98653379456502,
          "notes": "Fundamental human-resource throughput",
          "ratings": "CFII",
          "contactInfo": "bebbettso@yolasite.com"
        },
        {
          "id": 26,
          "name": "Gal Hindrich",
          "licenseNum": 39336879808928,
          "notes": "Inverse attitude-oriented challenge",
          "ratings": "CFII",
          "contactInfo": "ghindrichp@dot.gov"
        },
        {
          "id": 27,
          "name": "Doralyn MacGhee",
          "licenseNum": 14274306745976,
          "notes": "Public-key motivating migration",
          "ratings": "CFI",
          "contactInfo": "dmacgheeq@jalbum.net"
        },
        {
          "id": 28,
          "name": "Olga Balchen",
          "licenseNum": 9335310886082,
          "notes": null,
          "ratings": "CFI",
          "contactInfo": "obalchenr@fc2.com"
        },
        {
          "id": 29,
          "name": "Tamar Mitchall",
          "licenseNum": 83235642306161,
          "notes": null,
          "ratings": "CFI",
          "contactInfo": "tmitchalls@chron.com"
        },
        {
          "id": 30,
          "name": "Celinda Demeter",
          "licenseNum": 72758218845594,
          "notes": "Balanced stable conglomeration",
          "ratings": null,
          "contactInfo": "cdemetert@gov.uk"
        },
        {
          "id": 31,
          "name": "Sisely Carnow",
          "licenseNum": 70691554430234,
          "notes": "Ergonomic 6th generation solution",
          "ratings": "CFI",
          "contactInfo": "scarnowu@e-recht24.de"
        },
        {
          "id": 32,
          "name": "Clerkclaude Scotter",
          "licenseNum": 35347695958438,
          "notes": "Seamless asynchronous synergy",
          "ratings": null,
          "contactInfo": "cscotterv@histats.com"
        },
        {
          "id": 33,
          "name": "Virgil Pacey",
          "licenseNum": 42498672598630,
          "notes": "Multi-channelled high-level paradigm",
          "ratings": "CFII",
          "contactInfo": "vpaceyw@uol.com.br"
        },
        {
          "id": 34,
          "name": "Colene Hankins",
          "licenseNum": 59922407695232,
          "notes": null,
          "ratings": "MEI",
          "contactInfo": "chankinsx@dot.gov"
        },
        {
          "id": 35,
          "name": "Zed Henfre",
          "licenseNum": 36342757575299,
          "notes": "Up-sized context-sensitive extranet",
          "ratings": "CFI",
          "contactInfo": "zhenfrey@hatena.ne.jp"
        },
        {
          "id": 36,
          "name": "Hastie Laraway",
          "licenseNum": 24362429622549,
          "notes": "Intuitive exuding throughput",
          "ratings": "CFII",
          "contactInfo": "hlarawayz@delicious.com"
        },
        {
          "id": 37,
          "name": "Gianna Gunner",
          "licenseNum": 64909998643016,
          "notes": "Customer-focused global architecture",
          "ratings": "CFII",
          "contactInfo": "ggunner10@house.gov"
        },
        {
          "id": 38,
          "name": "Munmro Yakubovich",
          "licenseNum": 89259913595029,
          "notes": "Progressive optimal collaboration",
          "ratings": null,
          "contactInfo": "myakubovich11@newsvine.com"
        },
        {
          "id": 39,
          "name": "August Schoenleiter",
          "licenseNum": 12096235109111,
          "notes": null,
          "ratings": "MEI",
          "contactInfo": "aschoenleiter12@360.cn"
        },
        {
          "id": 40,
          "name": "Portie Applin",
          "licenseNum": 86495411842750,
          "notes": null,
          "ratings": "CFII",
          "contactInfo": "papplin13@arizona.edu"
        },
        {
          "id": 41,
          "name": "Saidee Batterson",
          "licenseNum": 60379061839569,
          "notes": "Pre-emptive logistical leverage",
          "ratings": "MEI",
          "contactInfo": "sbatterson14@chron.com"
        },
        {
          "id": 42,
          "name": "Catharine Bootell",
          "licenseNum": 32042463701744,
          "notes": "Synergized even-keeled core",
          "ratings": "MEI",
          "contactInfo": "cbootell15@java.com"
        },
        {
          "id": 43,
          "name": "Sibel McFadden",
          "licenseNum": 9898120353836,
          "notes": "Extended systematic utilisation",
          "ratings": "CFI",
          "contactInfo": "smcfadden16@squidoo.com"
        },
        {
          "id": 44,
          "name": "Melvin Buzza",
          "licenseNum": 88242412768930,
          "notes": "Vision-oriented mobile concept",
          "ratings": "CFII",
          "contactInfo": "mbuzza17@ft.com"
        },
        {
          "id": 45,
          "name": "Aimil Pinniger",
          "licenseNum": 47786277688561,
          "notes": "Switchable exuding forecast",
          "ratings": "CFII",
          "contactInfo": "apinniger18@yahoo.com"
        },
        {
          "id": 46,
          "name": "Baily Laugherane",
          "licenseNum": 89771801901361,
          "notes": "Multi-channelled grid-enabled definition",
          "ratings": "CFII",
          "contactInfo": "blaugherane19@ycombinator.com"
        },
        {
          "id": 47,
          "name": "Deanne Caro",
          "licenseNum": 19592118029125,
          "notes": "Persevering systemic product",
          "ratings": "MEI",
          "contactInfo": "dcaro1a@creativecommons.org"
        },
        {
          "id": 48,
          "name": "Etta Delwater",
          "licenseNum": 52167622150037,
          "notes": "Synergistic responsive website",
          "ratings": null,
          "contactInfo": "edelwater1b@miitbeian.gov.cn"
        },
        {
          "id": 49,
          "name": "Terrie Benezet",
          "licenseNum": 49973488004808,
          "notes": null,
          "ratings": "MEI",
          "contactInfo": "tbenezet1c@mit.edu"
        },
        {
          "id": 50,
          "name": "Lia Danjoie",
          "licenseNum": 8229366890091,
          "notes": "Adaptive national synergy",
          "ratings": null,
          "contactInfo": "ldanjoie1d@vimeo.com"
        },
        {
          "id": 51,
          "name": "Algernon Scrowston",
          "licenseNum": 86836481560106,
          "notes": "Total systematic artificial intelligence",
          "ratings": "CFII",
          "contactInfo": "ascrowston1e@friendfeed.com"
        },
        {
          "id": 52,
          "name": "Adolphe Strutt",
          "licenseNum": 88597269438192,
          "notes": "Operative 4th generation info-mediaries",
          "ratings": "CFI",
          "contactInfo": "astrutt1f@dot.gov"
        },
        {
          "id": 53,
          "name": "Normand Brahams",
          "licenseNum": 22213916656575,
          "notes": "Re-engineered non-volatile firmware",
          "ratings": "CFII",
          "contactInfo": "nbrahams1g@nbcnews.com"
        },
        {
          "id": 54,
          "name": "Kippie Broomer",
          "licenseNum": 33017710554693,
          "notes": "Operative encompassing budgetary management",
          "ratings": null,
          "contactInfo": "kbroomer1h@myspace.com"
        },
        {
          "id": 55,
          "name": "Reg Fison",
          "licenseNum": 11964143748276,
          "notes": "Implemented exuding product",
          "ratings": "MEI",
          "contactInfo": "rfison1i@usgs.gov"
        },
        {
          "id": 56,
          "name": "Malachi Kinahan",
          "licenseNum": 55926439057078,
          "notes": "Balanced zero defect forecast",
          "ratings": "MEI",
          "contactInfo": "mkinahan1j@seattletimes.com"
        },
        {
          "id": 57,
          "name": "Gennifer MacRonald",
          "licenseNum": 22783614146741,
          "notes": "Open-source object-oriented access",
          "ratings": "MEI",
          "contactInfo": "gmacronald1k@theguardian.com"
        },
        {
          "id": 58,
          "name": "Carmina Ledger",
          "licenseNum": 76755928447704,
          "notes": "Sharable reciprocal definition",
          "ratings": "CFII",
          "contactInfo": "cledger1l@istockphoto.com"
        },
        {
          "id": 59,
          "name": "Tresa Greschik",
          "licenseNum": 57548844885908,
          "notes": "Down-sized national middleware",
          "ratings": null,
          "contactInfo": "tgreschik1m@prweb.com"
        },
        {
          "id": 60,
          "name": "Gabriele Shenton",
          "licenseNum": 67771319959517,
          "notes": "De-engineered web-enabled parallelism",
          "ratings": null,
          "contactInfo": "gshenton1n@jigsy.com"
        },
        {
          "id": 61,
          "name": "Cooper Revan",
          "licenseNum": 11517321538126,
          "notes": "Up-sized background data-warehouse",
          "ratings": "CFII",
          "contactInfo": "crevan1o@abc.net.au"
        },
        {
          "id": 62,
          "name": "Leona Snook",
          "licenseNum": 86271271182180,
          "notes": "Distributed coherent function",
          "ratings": "CFI",
          "contactInfo": "lsnook1p@sina.com.cn"
        }, 
        {
          "id": 63,
          "name": "Ravi Biggar",
          "licenseNum": 19955526045706,
          "notes": "Reduced background access",
          "ratings": "CFI",
          "contactInfo": "rbiggar1q@springer.com"
        },
        {
          "id": 64,
          "name": "Flo Liddon",
          "licenseNum": 84567130749498,
          "notes": "Re-contextualized incremental secured line",
          "ratings": "CFII",
          "contactInfo": "fliddon1r@cloudflare.com"
        },
        {
          "id": 65,
          "name": "Myca Rosencrantz",
          "licenseNum": 69812240848295,
          "notes": "Right-sized eco-centric algorithm",
          "ratings": "CFI",
          "contactInfo": "mrosencrantz1s@acquirethisname.com"
        },
        {
          "id": 66,
          "name": "Sandy Bullion",
          "licenseNum": 51640955242930,
          "notes": "Multi-lateral client-driven intranet",
          "ratings": null,
          "contactInfo": "sbullion1t@bloglovin.com"
        },
        {
          "id": 67,
          "name": "Kacey Dickie",
          "licenseNum": 40072819670571,
          "notes": "Reverse-engineered value-added budgetary management",
          "ratings": "CFII",
          "contactInfo": "kdickie1u@wordpress.org"
        },
        {
          "id": 68,
          "name": "Elysee Gai",
          "licenseNum": 37093009068404,
          "notes": null,
          "ratings": "CFI",
          "contactInfo": "egai1v@jugem.jp"
        },
        {
          "id": 69,
          "name": "Noelani Spraberry",
          "licenseNum": 1926473051349,
          "notes": "Organized upward-trending function",
          "ratings": "CFI",
          "contactInfo": "nspraberry1w@skype.com"
        },
        {
          "id": 70,
          "name": "Jacquie Sodory",
          "licenseNum": 81662223829420,
          "notes": "Networked regional solution",
          "ratings": "MEI",
          "contactInfo": "jsodory1x@bbb.org"
        },
        {
          "id": 71,
          "name": "Blondelle Androletti",
          "licenseNum": 15650896107291,
          "notes": "Self-enabling mobile initiative",
          "ratings": "MEI",
          "contactInfo": "bandroletti1y@domainmarket.com"
        },
        {
          "id": 72,
          "name": "Desmund Ortas",
          "licenseNum": 20766150031647,
          "notes": "Seamless explicit help-desk",
          "ratings": "MEI",
          "contactInfo": "dortas1z@statcounter.com"
        },
        {
          "id": 73,
          "name": "Ragnar Mucklow",
          "licenseNum": 14237636040411,
          "notes": "Balanced next generation help-desk",
          "ratings": "MEI",
          "contactInfo": "rmucklow20@hhs.gov"
        },
        {
          "id": 74,
          "name": "Carmina Noore",
          "licenseNum": 41914892615155,
          "notes": "Sharable contextually-based contingency",
          "ratings": "CFI",
          "contactInfo": "cnoore21@tinyurl.com"
        },
        {
          "id": 75,
          "name": "Kizzee Stollwerck",
          "licenseNum": 29170892881035,
          "notes": "Down-sized holistic customer loyalty",
          "ratings": "CFII",
          "contactInfo": "kstollwerck22@mac.com"
        },
        {
          "id": 76,
          "name": "Bradan Tease",
          "licenseNum": 58066654345785,
          "notes": "Seamless value-added website",
          "ratings": null,
          "contactInfo": "btease23@fema.gov"
        },
        {
          "id": 77,
          "name": "Eadmund Lawes",
          "licenseNum": 93785248091883,
          "notes": "Realigned zero administration capability",
          "ratings": "CFI",
          "contactInfo": "elawes24@storify.com"
        },
        {
          "id": 78,
          "name": "Bellanca Weadick",
          "licenseNum": 65908414913626,
          "notes": "Automated demand-driven artificial intelligence",
          "ratings": "MEI",
          "contactInfo": "bweadick25@zimbio.com"
        },
        {
          "id": 79,
          "name": "Hal Dahlbom",
          "licenseNum": 67401250663173,
          "notes": "Centralized responsive data-warehouse",
          "ratings": "CFII",
          "contactInfo": "hdahlbom26@mlb.com"
        },
        {
          "id": 80,
          "name": "Evy Costanza",
          "licenseNum": 90874458170668,
          "notes": "Total scalable application",
          "ratings": "CFI",
          "contactInfo": "ecostanza27@phoca.cz"
        },
        {
          "id": 81,
          "name": "Ulla Almon",
          "licenseNum": 54755732867379,
          "notes": "Face to face real-time encoding",
          "ratings": null,
          "contactInfo": "ualmon28@discovery.com"
        },
        {
          "id": 82,
          "name": "Marilin Bater",
          "licenseNum": 45237602918722,
          "notes": "Distributed methodical encryption",
          "ratings": "CFII",
          "contactInfo": "mbater29@abc.net.au"
        },
        {
          "id": 83,
          "name": "Kathye MacGillreich",
          "licenseNum": 43699521594095,
          "notes": "Fundamental static software",
          "ratings": "CFI",
          "contactInfo": "kmacgillreich2a@auda.org.au"
        },
        {
          "id": 84,
          "name": "Irv Clail",
          "licenseNum": 2632976159377,
          "notes": null,
          "ratings": "CFII",
          "contactInfo": "iclail2b@4shared.com"
        },
        {
          "id": 85,
          "name": "Hannah Haresnaip",
          "licenseNum": 37356618268647,
          "notes": "Proactive non-volatile artificial intelligence",
          "ratings": "MEI",
          "contactInfo": "hharesnaip2c@woothemes.com"
        },
        {
          "id": 86,
          "name": "Moria Teresi",
          "licenseNum": 68920606876027,
          "notes": "Diverse actuating system engine",
          "ratings": "CFII",
          "contactInfo": "mteresi2d@sun.com"
        },
        {
          "id": 87,
          "name": "Jodi Rouchy",
          "licenseNum": 18790266120405,
          "notes": null,
          "ratings": "MEI",
          "contactInfo": "jrouchy2e@soup.io"
        },
        {
          "id": 88,
          "name": "Tildi Mickleborough",
          "licenseNum": 92854058119030,
          "notes": null,
          "ratings": "CFII",
          "contactInfo": "tmickleborough2f@va.gov"
        },
        {
          "id": 89,
          "name": "Tandie Toyne",
          "licenseNum": 43815305655310,
          "notes": "Re-engineered fault-tolerant access",
          "ratings": null,
          "contactInfo": "ttoyne2g@wisc.edu"
        },
        {
          "id": 90,
          "name": "Stacee Sharplin",
          "licenseNum": 57048667173927,
          "notes": "Focused dedicated monitoring",
          "ratings": null,
          "contactInfo": "ssharplin2h@google.com.au"
        },
        {
          "id": 91,
          "name": "Philomena Maken",
          "licenseNum": 9271032180101,
          "notes": "Down-sized holistic service-desk",
          "ratings": "CFI",
          "contactInfo": "pmaken2i@wikispaces.com"
        },
        {
          "id": 92,
          "name": "Amy Prise",
          "licenseNum": 19669961903657,
          "notes": "Ameliorated system-worthy flexibility",
          "ratings": "CFI",
          "contactInfo": "aprise2j@vkontakte.ru"
        },
        {
          "id": 93,
          "name": "Myron Fancott",
          "licenseNum": 60851581510873,
          "notes": "Reduced tertiary parallelism",
          "ratings": "CFII",
          "contactInfo": "mfancott2k@parallels.com"
        },
        {
          "id": 94,
          "name": "Arda Sarra",
          "licenseNum": 96637732438711,
          "notes": "Polarised dedicated infrastructure",
          "ratings": "MEI",
          "contactInfo": "asarra2l@wsj.com"
        },
        {
          "id": 95,
          "name": "Rea Stirman",
          "licenseNum": 98937782504539,
          "notes": "Balanced explicit parallelism",
          "ratings": "CFI",
          "contactInfo": "rstirman2m@livejournal.com"
        },
        {
          "id": 96,
          "name": "Celia Tynewell",
          "licenseNum": 65065994256744,
          "notes": "Open-source scalable encoding",
          "ratings": "CFI",
          "contactInfo": "ctynewell2n@shinystat.com"
        },
        {
          "id": 97,
          "name": "Charlotta Clynmans",
          "licenseNum": 27770839131550,
          "notes": "Optimized well-modulated methodology",
          "ratings": "CFI",
          "contactInfo": "cclynmans2o@ftc.gov"
        },
        {
          "id": 98,
          "name": "Fan Wardell",
          "licenseNum": 30796138633839,
          "notes": "Configurable modular info-mediaries",
          "ratings": "CFI",
          "contactInfo": "fwardell2p@reverbnation.com"
        },
        {
          "id": 99,
          "name": "Carolus St. Ledger",
          "licenseNum": 18033644348601,
          "notes": null,
          "ratings": null,
          "contactInfo": "cst2q@google.fr"
        },
        {
          "id": 100,
          "name": "Caitrin Shalliker",
          "licenseNum": 45870456618779,
          "notes": "Multi-channelled dedicated system engine",
          "ratings": "CFI",
          "contactInfo": "cshalliker2r@skype.com"
        }
      ]);
    });
};
