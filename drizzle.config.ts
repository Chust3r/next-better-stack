import { defineConfig } from 'drizzle-kit';

import { env } from '@config/env';

export default defineConfig({
  dialect: 'postgresql',
  out: './drizzle',
  schema: './src/database/schema',
  dbCredentials: {
    url: env.DATABASE_URL
  }
});
