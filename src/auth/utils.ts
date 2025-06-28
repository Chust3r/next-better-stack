import 'server-only';
import { headers } from 'next/headers';

import { auth } from './auth.config';

/**
 * Retrieves the current user session on the server side.
 *
 * Uses the authentication API to get the session by passing the request headers,
 * which allows it to validate the user’s authentication status.
 *
 * @returns The current session object or null if no session exists.
 */
export const getSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  return session;
};

/**
 * Retrieves the authenticated user from the current session.
 *
 * If no session exists, returns null.
 *
 * @returns The user object from the session or null if not authenticated.
 */
export const getUser = async () => {
  const session = await getSession();

  if (!session) return null;

  return session.user;
};
