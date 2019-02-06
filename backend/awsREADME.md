# Database

Labs9-FlightLog uses Amazon Web Services Relational Database Service (RDS) as our database management.

## Amazon Web Services (AWS)

An account can be created at [AWS](aws.amazon.com). A new account can be created or use your existing Amazon account.

It is important to document the following information and save it in a location (not in your code) where you can access it if needed.
- DATABASE INSTANCE NAME (not the same as db name)
- DATABASE HOST ADDRESS
- DATABASE USERNAME
- DATABASE PASSWORD
- DATABASE NAME
- DATABASE PORT

### To Create A New Database
 1. Sign into the AWS Management Console and in the `Find Services` search bar, enter RDS (for Relational Database Service). 
 2. Look for `Create Database` at the center of the page and select the orange `Create database` button.
 3. Select `MySQL`, NEXT.
 4. `Specify Database Details`, scroll down to settings. Enter your `database instance identifier`, `master username` and `master password`. DOCUMENT THESE CAREFULLY and ACCURATELY! NEXT.
 5. `Configure advanced settings`, scroll down to `Database options`. Name your database. <br> DOCUMENT THIS and the `PORT`! `DATABASE NAME` IS DIFFICULT TO FIND ONCE YOU LEAVE THE PAGE!
 6. Scroll to bottom of page and create database.

### KNEX
Our database was populated using KNEX. Visit this section of the documentation to see how this was completed and the dependencies need. [HERE](./readme.md)

Create an `.env` and add it to your `.gitignore`. Populate your KNEXFILE like you see in the example below.

#### EXAMPLE KNEXFILE.js
```module.exports = {
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



