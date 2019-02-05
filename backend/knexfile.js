require("dotenv").config();

// const dbConnection = process.env.DATABASE_URL;

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.AWS_HOST,
      port: process.env.AWS_PORT,
      user: process.env.AWS_USER,
      password: process.env.AWS_PASS,
      database: process.env.AWS_DATABASE
    },
    useNullAsDefault: true
  },

  production: {
    client: "mysql",
    connection: {
      host: process.env.AWS_HOST,
      port: process.env.AWS_PORT,
      user: process.env.AWS_USER,
      password: process.env.AWS_PASS,
      database: process.env.AWS_DATABASE
    },
    useNullAsDefault: true
  }
};
