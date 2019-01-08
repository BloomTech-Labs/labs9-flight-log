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
