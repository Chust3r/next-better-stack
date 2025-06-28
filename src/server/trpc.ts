import { initTRPC, TRPCError } from '@trpc/server';
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import superjson from 'superjson';
/**
 * Sets up the tRPC context and router for the server.
 *
 * - `createContext` initializes the context for each request,
 *   fetching the current user session and providing the database instance.
 *   It also includes the request headers if available.
 *
 * - `Context` type represents the shape of the context object used throughout tRPC.
 *
 * - Initializes tRPC with the context and configures `superjson` as the transformer
 *   to serialize/deserialize data automatically.
 *
 * - Defines `isAuthed` middleware that checks for an authenticated session.
 *   If no session is present, it throws an UNAUTHORIZED error.
 *
 * - Exports:
 *    - `router`: the main tRPC router creator.
 *    - `publicProcedure`: tRPC procedures without authentication.
 *    - `protectedProcedure`: tRPC procedures guarded by the `isAuthed` middleware.
 */

import { getSession } from '@auth/utils';
import { db } from '@db';

export const createContext = async (opts?: FetchCreateContextFnOptions) => {
  const session = await getSession();

  return {
    session,
    db,
    headers: opts && Object.fromEntries(opts.req.headers)
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;

const t = initTRPC.context<Context>().create({ transformer: superjson });

const isAuthed = t.middleware((opts) => {
  const { ctx } = opts;
  if (!ctx.session) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return opts.next({
    ctx: {
      session: ctx.session
    }
  });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthed);
