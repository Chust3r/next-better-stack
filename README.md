# ⚡ next-better-stack

A full-stack starter template built with modern technologies:

- ✅ Next.js App Router
- 🔐 Better Auth
- 🧱 Drizzle ORM + PostgreSQL
- 🧠 TRPC + TanStack Query (React Query)
- 🔒 Secure sessions & role-based access
- 🛠️ Built with Bun, TypeScript, and Zod

---

## 🚀 Tech Stack

| Technology         | Purpose                        |
| ------------------ | ------------------------------ |
| **Next.js**        | App Router + Server Actions    |
| **Better Auth**    | Authentication & Authorization |
| **Drizzle ORM**    | Type-safe SQL with PostgreSQL  |
| **TanStack Query** | Client-side fetching + caching |
| **TRPC**           | Type-safe backend API calls    |
| **Zod**            | Schema validation              |
| **Bun**            | Runtime + Tooling              |

---

## 📦 Installation

```bash
git clone https://github.com/your-user/next-better-stack.git
cd next-better-stack

bun install
# or: pnpm install / npm install / yarn install
```

## 🌱 Environment Variables

Create a `.env` file in the root directory and set the following environment variables:

```bash
# .env

# Better Auth
BETTER_AUTH_SECRET=cz6qRoGz7DXXomsUpeSlIEPs5Yw9RuPj
BETTER_AUTH_URL=http://localhost:3000

# PostgreSQL (Drizzle)
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/postgres
```

## 🛠️ Dev Scripts

| Command             | Description                      |
| ------------------- | -------------------------------- |
| `bun dev`           | Start dev server with Turbopack  |
| `bun build`         | Build the project                |
| `bun start`         | Start production server          |
| `bun auth:generate` | Generate Better Auth boilerplate |
| `bun db:push`       | Push schema to DB                |
| `bun db:migrate`    | Run migrations                   |
| `bun db:introspect` | Introspect DB to schema          |
| `bun db:generate`   | Generate schema/migrations       |
| `bun db:view`       | Open Drizzle Studio              |
| `bun db:drop`       | Drop all DB tables               |
| `bun lint`          | Run Next.js lint                 |
| `bun lint:fix`      | Fix lint errors                  |
| `bun lint:strict`   | Fail on any warnings             |
| `bun prepare`       | Setup Husky Git hooks            |

---

```bash
# Clone and install dependencies
git clone https://github.com/Chust3r/next-better-stack.git
cd next-better-stack
bun install

# Setup your .env
cp .env.example .env

# Generate auth files
bun auth:generate

# Push your database schema
bun db:push

# Start dev server
bun dev
```

## 📁 Project Structure

```
├── app/                  # Next.js App Router directory (routes and pages)
├── auth/                 # Better Auth configuration and handlers
├── components/           # Shared React components (UI, layout, etc.)
├── config/               # Project-wide configuration (e.g., constants, env)
├── database/             # Drizzle ORM schema definitions and database logic
├── lib/                  # Utility functions and reusable libraries
├── server/               # TRPC routers and backend procedures
├── types/                # Global TypeScript types
├── middleware.ts         # Next.js middleware for auth/session handling
└── .env                  # Environment variables (not committed)
```

## 🧪 TRPC + React Query Example

```tsx
import { useTRPC } from '@components/providers/trpc-provider';
import { useQuery } from '@tanstack/react-query';

export default function HomePage() {
  const trpc = useTRPC();

  const { data, isLoading } = useQuery(trpc.example.getExample.queryOptions());

  return <div>Home Page</div>;
}
```

## 💅 Linting & Formatting

- Uses Prettier, ESLint, and Tailwind Prettier plugin
- Automatically formats staged files via lint-staged

## 🧑‍💻 Contributing

- Fork & clone the repo
- Create a new branch: `git checkout -b feature/my-feature`
- Commit your changes: `git commit -am 'Add my feature'`
- Push to branch: `git push origin feature/my-feature`
- Open a pull request 🚀

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
