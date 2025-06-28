import 'client-only';

import { createTRPCClient, httpBatchLink } from '@trpc/client';
import transformer from 'superjson';

import { getBaseUrl } from '@/lib/get-base-url';
import type { AppRouter } from '@server/router';

/**
 * Creates a tRPC client configured to communicate with the server-side API.
 *
 * Uses `httpBatchLink` to batch multiple tRPC calls into a single HTTP request,
 * improving efficiency by reducing the number of network requests.
 *
 * The client uses `superjson` as a transformer to serialize and deserialize
 * complex data types such as Dates and Maps seamlessly.
 *
 * The `url` is dynamically set based on the environment using `getBaseUrl()`.
 *
 * @returns A typed tRPC client instance for making API calls to the server.
 */
export const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
      transformer
    })
  ]
});
