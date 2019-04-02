import knex from 'knex';
import { knexSnakeCaseMappers } from 'objection';
import * as MockKnex from 'mock-knex';

import configs from './configs.json';

const env = process.env.NODE_ENV || 'development';

const writer = configs.writer;
export let connection = knex({
  client: 'mysql2',
  connection: {
    host: writer.host,
    user: writer.user,
    port: writer.port,
    password: writer.password,
    database: writer.database,
  },
  pool: { min: 0, max: writer.poolSize },
  // debug: true,
    // Merge `postProcessResponse` and `wrapIdentifier` mappers.
  // If your columns are UPPER_SNAKE_CASE you can use
  // knexSnakeCaseMappers({ upperCase: true })
  ...knexSnakeCaseMappers(),
}
);

// if (env === 'test') {
//   MockKnex.mock(connection);
// }

 export default connection;
