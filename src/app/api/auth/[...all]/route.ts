import { toNextJsHandler } from 'better-auth/next-js';

import { auth } from '@auth/auth.config';

/**
 * Exports the HTTP GET and POST handlers for Next.js API routes,
 * using Better Auth to manage authentication and sessions.
 *
 * `toNextJsHandler` transforms the `auth` configuration into
 * handlers compatible with Next.js API route conventions.
 *
 */
export const { GET, POST } = toNextJsHandler(auth);
