import { router } from '@server/trpc';

import { exampleRouter } from './routers/example';
/**
 * Main application router that combines all individual routers.
 *
 * Imports the base `router` helper and the `exampleRouter` module,
 * then merges them into a single `appRouter` object.
 *
 * `appRouter` represents the full API schema.
 *
 * The `AppRouter` type is exported for use in type-safe client calls.
 */

export const appRouter = router({
  example: exampleRouter
});

export type AppRouter = typeof appRouter;
