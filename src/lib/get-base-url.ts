/**
 * Returns the base URL of the application.
 *
 * - In the browser, returns an empty string to use relative URLs.
 * - On the server, if running on Vercel, returns the deployed URL with https.
 * - Otherwise, returns localhost with the default port.
 *
 * This helps generate absolute URLs in SSR or API calls,
 * while avoiding full URLs on the client.
 */
export const getBaseUrl = (): string => {
  if (typeof window !== 'undefined') return '';

  const vercelUrl =
    process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL;
  if (vercelUrl) {
    if (vercelUrl.startsWith('http')) {
      return vercelUrl;
    }
    return `https://${vercelUrl}`;
  }

  const port = process.env.PORT || 3000;
  return `http://localhost:${port}`;
};
