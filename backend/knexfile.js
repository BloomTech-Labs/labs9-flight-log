// Update with your config settings.
require("dotenv").config();

const dbConnection = process.env.DATABASE_URL;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    },
    useNullAsDefault: true
  },
  // development: {
  //   client: "mysql",
  //   version: "5.6.41",

  //   connection: {
  //     host: process.env.HOST,
  //     port: process.env.PORT,
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
  production: {
    client: "pg",
    connection: dbConnection, // can be and object or a string
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
