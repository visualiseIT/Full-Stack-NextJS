# Full Stack NextJS Notes App 


`NextJS` `React` `Typescript` `Tailwind` `Convex` `Clerk` `Shadcn`



![quick-notes_thumb.png](quick-notes_thumb.png)
![Screenshot_dark_mode.png](Screenshot_dark_mode.png)
![Screenshot.png](Screenshot.png)


## !! N.B. This repo is a work in progress.. 
### ## This message will be removed when all features are checked in) 

### Steps to re-create project:

Built with `create-next-app`

To run the app in dev mode:

> cd next-app
> 
> npm run dev

To deploy Convex functions,
in another terminal run:
> npx convex dev

To deploy on vercel:

> vercel
> 
> vercel --prod

## Build Notes:

### Create NextJS App

> npx create-next-app next-app


### Setup Convex

>npm install convex

>npx convex dev

### Setup Clerk with Convex

create convex/auth.config.ts

deploy by running: npx convex dev

> npm install @clerk/nextjs

create file: [ConvexClerkProvider.tsx](next-app%2Fcomponents%2Fproviders%2FConvexClerkProvider.tsx)

add NavBar with SignIn buttons etc.,


ShadCN (0.9.x is buggy, use 0.8.0)
> npx shadcn-ui@0.8.0 add dialog

---
inspiration:
https://www.youtube.com/watch?v=4ojKx770_0Q
