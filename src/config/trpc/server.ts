import 'server-only';

import { loggerLink } from '@trpc/client';
import { experimental_nextCacheLink as nextCacheLink } from '@trpc/next/app-dir/links/nextCache';
import { experimental_createTRPCNextAppDirServer as createTRPCNextAppDirServer } from '@trpc/next/app-dir/server';
import { cookies } from 'next/headers';
import transformer from 'superjson';

import { getSession } from '@auth/utils';
import { db } from '@db';
import { appRouter } from '@server/router';

/**
 * Creates a tRPC server handler configured for Next.js app directory (RSC).
 *
 * This server uses experimental Next.js app dir support from tRPC for
 * server components and edge functions integration.
 *
 * Features:
 * - `loggerLink`: Disables logging (can be enabled for debugging).
 * - `nextCacheLink`: Adds built-in caching with revalidation set to 1 second.
 * - Context creation includes session data fetched via `getSession`,
 *   database instance (`db`), and request headers including cookies.
 * - Uses `superjson` transformer for serializing complex data.
 *
 * This setup enables server-side tRPC calls with caching, session-aware context,
 * and seamless integration in Next.js app directory environment.
 */
export const server = createTRPCNextAppDirServer<typeof appRouter>({
  config() {
    return {
      links: [
        loggerLink({
          enabled: () => false
        }),
        nextCacheLink({
          revalidate: 1,
          router: appRouter,
          transformer,
          async createContext() {
            const session = await getSession();

            const cookieStore = await cookies();

            return {
              session,
              db,
              headers: {
                cookie: cookieStore.toString(),
                'x-trpc-source': 'rsc-invoke'
              }
            };
          }
        })
      ]
    };
  }
});
