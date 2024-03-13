require('dotenv').config();

const options = {
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    database: process.env.MYSQLDATABASE,
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    dialect: 'mysql',
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
    logging: false,
    timezone: '-03:00',
  };
  
  module.exports = {
    development: {
      ...options,
    },
    test: {
      ...options,
    },
    production: {
      ...options,
    },
  };
