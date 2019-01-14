// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    },
    useNullAsDefault: true
  }
  // development: {
  //   client: "mysql",
  //   version: "5.6.41",

  //   connection: {
  //     host: process.env.HOST,
  //     port: "3306",
  //     user: process.env.USER,
  //     password: process.env.PASS,
  //     database: "labs9flightlog"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   useNullAsDefault: true
  // },

  // staging: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // },

  // production: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // }
};
