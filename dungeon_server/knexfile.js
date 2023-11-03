import * as dotenv from 'dotenv'
dotenv.config()
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

export default {
  client: 'postgresql',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    idleTimeoutMillis: 600000
  },
  pool: {
    min: 2,
    max: 30,
    propagateCreateError: false
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}