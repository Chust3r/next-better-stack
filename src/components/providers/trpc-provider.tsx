'use client';

import { createTRPCContext } from '@trpc/tanstack-react-query';

import { queryClient } from '@config/query-client/client';
import { client } from '@config/trpc/client';
import { AppRouter } from '@server/router';

interface TrpcProviderProps {
  children: React.ReactNode;
}

export const { TRPCProvider, useTRPC } = createTRPCContext<AppRouter>();

export function TrpcProvider({ children }: TrpcProviderProps) {
  return (
    <TRPCProvider trpcClient={client} queryClient={queryClient}>
      {children}
    </TRPCProvider>
  );
}
