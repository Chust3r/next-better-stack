import { Geist, Geist_Mono } from 'next/font/google';

import { cn } from '@lib/utils';

/**
 * Loads the Geist Sans font with Latin subset, assigning a CSS variable.
 */
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

/**
 * Loads the Geist Mono font with Latin subset, assigning a CSS variable.
 */
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

/**
 * Combines the CSS custom properties for Geist Sans and Geist Mono fonts
 * into a single string for use in className or style attributes.
 */
export const fontVariables = cn(geistSans.variable, geistMono.variable);
