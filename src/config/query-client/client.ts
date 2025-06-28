import { QueryClient } from '@tanstack/react-query';

import {
  QUERY_CLIENT_REFETCH_ON_WINDOW_FOCUS,
  QUERY_CLIENT_RETRY,
  QUERY_CLIENT_RETRY_DELAY,
  QUERY_CLIENT_STALE_TIME,
  QUERY_CLIENT_GC_TIME
} from './query.config';

/**
 * Creates and exports a configured React QueryClient instance.
 *
 * This client manages the cache and behavior of queries throughout the app.
 * The default options control key behaviors such as:
 * - `refetchOnWindowFocus`: Whether queries refetch when the window regains focus.
 * - `retry`: Number of retry attempts on query failure.
 * - `staleTime`: Duration before cached data is considered stale.
 * - `retryDelay`: Delay between retry attempts.
 * - `gcTime`: Garbage collection time for inactive cache data.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: QUERY_CLIENT_REFETCH_ON_WINDOW_FOCUS,
      retry: QUERY_CLIENT_RETRY,
      staleTime: QUERY_CLIENT_STALE_TIME,
      retryDelay: QUERY_CLIENT_RETRY_DELAY,
      gcTime: QUERY_CLIENT_GC_TIME
    }
  }
});
