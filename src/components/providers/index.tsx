'use client';
import { ThemeProvider } from 'next-themes';

import { QueryProvider } from './query-provider';
import { TrpcProvider } from './trpc-provider';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <QueryProvider>
        <TrpcProvider>{children}</TrpcProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
