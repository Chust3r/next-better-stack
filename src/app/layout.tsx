import './globals.css';
import type { Metadata } from 'next';

import { Providers } from '@components/providers';
import { fontVariables } from '@config/fonts';
import { cn } from '@lib/utils';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(fontVariables, 'antialiased')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
