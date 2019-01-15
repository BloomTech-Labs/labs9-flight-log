// Update with your config settings.
require("dotenv").config();

const dbConnection = process.env.DATABASE_URL;

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.HOST,
      port: '3306',
      user: process.env.USER,
      password: process.env.PASS,
      database: 'labs9flightlog'
    },
    useNullAsDefault: true
  },
  production: {
    // client: "pg",
    // connection: dbConnection, // can be and object or a string
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    // migrations: {
    //   tableName: "knex_migrations",
    //   directory: './migrations'
    // },
    // seeds: {
    //   directory: './seeds'
    // }
    client: "mysql",
    connection: {
      host: process.env.HOST,
      port: '3306',
      user: process.env.USER,
      password: process.env.PASS,
      database: 'labs9flightlog'
    },
    useNullAsDefault: true
  }
};
