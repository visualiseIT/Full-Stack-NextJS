# Full-Stack-NextJS

to run the app in dev mode:

> cd next-app

> npm run dev

## How I built this App:

> npx create-next-app next-app

I chose the following default options:


✔ Would you like to use TypeScript? … Yes

✔ Would you like to use ESLint? … Yes

✔ Would you like to use Tailwind CSS? … Yes

✔ Would you like to use `src/` directory? … No

✔ Would you like to use App Router? (recommended) … Yes

✔ Would you like to customize the default import alias (@/*)? … No 

## setting up Convex

>npm install convex

>npx convex dev

## setting up Convex Auth with Clerk

create convex/auth.config.ts

deploy by running: npx convex dev

> npm install @clerk/nextjs

create file: [ConvexClerkProvider.tsx](next-app%2Fcomponents%2Fproviders%2FConvexClerkProvider.tsx)

add NavBar with SignIn buttons etc.,
