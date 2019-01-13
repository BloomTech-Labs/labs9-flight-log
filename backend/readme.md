add all dependencies

dependencies added:
npm init
npm i knex
npm i sqlite3
npm i express
npm i node
npm i nodemon --only=dev

created .gitignore file

knex init
knex migrate:make pilots_table
knex migrate:make flights_table
knex migrate:make aircrafts_table
knex migrate:make instructors_table

for user pilot seeds, ran into issue where i would get error: Error: SQLITE_ERROR: too many SQL variables, seems that this is internal driver limitation and you can't avoid it.
have to insert entities in chuncks. I dont really think it it should be necessary to create 500 seeds for users(pilots), i think 100 is more than good enough

TODO:
pilots
routes error message/catch when duplicate, should respond with correct error, right now just responds with error creating pilot
post route async response is id of newly created pilot, may want to change what we want returned
should look into migrations, loggin default needed, along with isPaid, currently null
make sure error codes are correct codes
aircrafts
flightID currently null, have to bring in the flights in the route
instructors
flightID currently null, have to bring in the flights in the route???
personally i think we may need to set this table up differently, doesnt make sense to attach
a flight id to an instructor and have the same instructor added multiple times for different flights, all we need is to reference the instructor for a flight, i think maybe have a junction table and have instructor related to the pilot, with a many to many relationship,
now that i think about it, i think the same principle applies with the aircraft.
i think if you consider scalability, you would create less redundancies this way
not too sure...
