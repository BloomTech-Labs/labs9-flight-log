// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    version: '5.6.41',

    connection: {
      host: 'labs9groupproject.c7dtwc22pwxk.us-east-1.rds.amazonaws.com',
      port: '3306',
      user: 'flightlogapp',
      password: '58eOTNzy',
      database: 'labs9flightlog',
    },
    pool: {
      min: 2,
      max: 10,
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
  },

  production: {
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
