import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import { env } from '@config/env';

import { schema } from './schema';

/**
 * Creates a PostgreSQL connection pool using the connection string
 * defined in environment variables.
 * - max: Maximum number of clients in the pool (10).
 * - idleTimeoutMillis: How long a client must sit idle before being closed (30 seconds).
 * - connectionTimeoutMillis: How long to wait for a new connection before timing out (2 seconds).
 */
const pool = new Pool({
  connectionString: env.DATABASE_URL,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

/**
 * Initializes a Drizzle ORM instance using the PostgreSQL client pool,
 * the database schema, and enables query logging.
 *
 * This `db` object is used to interact with the database throughout the app.
 */
export const db = drizzle({
  client: pool,
  schema,
  logger: true
});
