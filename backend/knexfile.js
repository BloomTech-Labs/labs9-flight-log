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
