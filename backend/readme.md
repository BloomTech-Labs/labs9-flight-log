add all dependencies

dependencies added:
npm init
npm i knex
npm i sqlite3
npm i express
npm i node
npm i nodemon --only=dev
cors
dotenv
firebase
firebase-admin
mysql
stripe

for testing:
jest
supertest

created .gitignore file

knex init
knex migrate:make pilots_table
knex migrate:make flights_table
knex migrate:make aircrafts_table
knex migrate:make instructors_table

please look at migrations directory to see how to setup testing and formating data
main routes can be found in the server.js
subroutes can be found in the routes directory
along with the middleware functions
helper functions can be found in the helpers directory

- main route
  /admins
  currently there are no ways to modify admins :alien:
- sub routes
  get(/) : get all admins
  post(/) : create new admin, two params for body, first,last names
  put(/:id) : edit admin, two params for body, first, last names, one header param, id
  delete (/:id) : delete admin, one header param id
- helper functions
  get: get admins table
  insert: two params, firstname, lastname, inserts body content, admin, into admin table
  update: update either body params, first or last name, where id is equal to id
  delete: accepts id header param, deletes from db

- main route
  /pilots
- middleware function decode/decode1 : decode access token from google firebase oauth, and assigns UID,
  when user signs in, or creates a new pilot
- sub routes
  get(/) : gets all pilots from db, however due to helper functions, cannot access all pilots
  get(/:signin) returns pilots db after decode1
  get(/:access/:UID) : if pilot is signed in allows info from specified UID
  get(/:access/:UID/:path) : path is either airplanes or instructors to handle respective info
  post(/) : allows user to create new pilot, after decode helper function to create UID
  put(/:id) : allows user/pilot to edit user info
  delete(/:id) : allows user to delete pilot info
- helper functions
  get: three params, access, UID and path,
  if access is signin, once middleware decode function validates, returns pilots db
  if access is access, moves onto UID, uid is passed, moves onto path
  if path is airplanes, joins airplanes table to bring back some info that pilot shares with airplanes
  if path is instructors, joins instructors table to bring back some info that pilot shares with instructors
  insert: creates new instructor, and inserts to pilots table
  update: accepts id and updated pilot info to update pilot where id matches id
  delete: accepts id and deletes pilot info
- object create and edit
  {
  firstName: "",
  isPaid: "",
  UID: ""
  }

- main route
  /airplanes
- sub routes
  get(/:UID) : get all airplanes where UID matches the uid from pilot
  get(/:UID/:id) : get one airplane where UID matches the uid from pilot and the id matches id from airplane
  post(/) : creates airplane
  put(/:id) : updates airplane where id matches id from airplane
  delete(/:id) : deletes airplane with matching id
- helper functions
  get: joins all airplanes matching uid of pilot, returns selected airplanes and their info
  if id param is passed, will only select specific id of airplane and join with all flights that match
  the corresponding airplane, bring back sum total of flight hours of flights that match airplane id
  insert: creates new airplane and inserts airplane to airplane db
  update: accepts id and updated airplane info, updates airplane where id matches id
  delete: accepts id and deletes airplane

  - object for create and edit
    {
    tailNumber: "",
    make: "",
    model: "",
    category: "",
    imageName: "",
    pilotsUID: ""
    }

- main route
  /instructors
- sub routes
  get(/:UID) : get all instructors where UID matches the uid from pilot
  get(/:UID/:id) : get one instructor where UID matches the uid from pilot and the id matches id from instructor
  post(/) : creates instructor
  put(/:id) : updates instructor where id matches id from instructor
  delete(/:id) : deletes instructor with matching id
- helper functions
  get: joins all instructors matching uid of pilot, returns selected instructiors and their info
  if id param is passed, will only select specific id of instructor
  insert: creates new instructor and inserts instructor to instructor db
  update: accepts id and updated instrucor info, updates instructor where id matches id
  delete: accepts id and deletes instructor

  - object create and edit
    {
    name: "",
    licenseNum: "",
    notes: "",
    ratings: "",
    contactInfo: "",
    pilotsUID: ""
    }

- main route
  /flights
- sub routes
  get(/:UID) : get all flights where UID matches uid from pilot
  get(/:UID/:total) : get all flights and total hours of flights matching uid of pilot
  post(/) : creates flight
  put(/:id) : updates flight where id matches id from flight
  delete(/:id) : deletes flight with matching id
- helper functions
  get: joins all flights matching uid of pilot, returns selected flights and their info
  if totals param is passed sum total of all flights attached to pilots uid, (used in totals modal front-end)
  insert: creates new flight and inserts flight to flight db
  update: accepts id and updates flight info, updates flight where id matches id
  delete: accpts id and deletes flight
- object create and edit
  {
  flightDate: "",
  flightName: "",
  airports: "",
  skyVector: "",
  remarks: "",
  numOfTakeOffs: "",
  numOfLandings: "",
  SEL: "",
  MEL: "",
  dayHours: "",
  nightHours: "",
  actInstruments: "",
  simInstruments: "",
  groundTrainer: "",
  crossCountry: "",
  asInstructor: "",
  dualReceived: "",
  pilotInCommand: "",
  total: "",
  pilotsUID: "",
  airplanesID: "",
  instructorsID: ""
  }
