// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'pharmacystore'
    },
    migrations: {
      directory: __dirname + './migrations',
    },
    seeds: { directory: __dirname + './seeds' },
  },

  testing: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'pharmacystore'
    },
    migrations: {
      directory: __dirname + './migrations',
    },
    seeds: { directory: __dirname + './seeds' },
  },

  production: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'pharmacystore'
    },
    migrations: {
      directory: __dirname + './migrations',
    },
    seeds: { directory: __dirname + './seeds' },
  },

};
