require("dotenv").config();

const dbConnection = process.env.DATABASE_URL;

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.HOST,
      port: "3306",
      user: process.env.USER,
      password: process.env.PASS,
      database: "labs9flightlog"
    },
    useNullAsDefault: true
  },

  production: {
    client: "mysql",
    connection: {
      host: process.env.HOST,
      port: "3306",
      user: process.env.USER,
      password: process.env.PASS,
      database: "labs9flightlog"
    },
    useNullAsDefault: true
  },
  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
