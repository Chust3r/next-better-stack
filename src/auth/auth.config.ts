import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { nextCookies } from 'better-auth/next-js';
import { admin } from 'better-auth/plugins';

import { db } from '@db';

/**
 * Configuration of Better Auth for authentication management.
 *
 * - Uses Drizzle ORM as the database adapter with PostgreSQL as the provider.
 * - Enables email and password authentication.
 * - Applies the admin plugin for administrative features.
 * - Uses Next.js cookie handling plugin for session management.
 *
 * This `auth` object is used throughout the app to manage user authentication,
 * sessions, and access control.
 */
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg'
  }),
  emailAndPassword: {
    enabled: true
  },
  plugins: [admin(), nextCookies()]
});
