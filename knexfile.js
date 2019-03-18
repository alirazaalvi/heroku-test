// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'nitrogen',
      user:     'root',
      password: 'root',
      port: '8889',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'nitrogen',
      user:     'root',
      password: 'root',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'nitrogen',
      user:     'root',
      password: 'root',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

};
