# MyLink - Gemini CLI Instructions

This project is a modern profile/link-in-bio application built with Next.js and Tailwind CSS.

## Project Overview

- **Name:** MyLink / My Profile
- **Core Technology:**
  - **Framework:** [Next.js](https://nextjs.org/) (App Router)
  - **Library:** [React 19](https://react.dev/)
  - **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
  - **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Structure:**
  - `my-profile/`: The main Next.js application directory.
  - `my-profile/app/`: Contains the App Router routes, layouts, and components.
  - `my-profile/public/`: Static assets like images and fonts.

## Building and Running

Commands should be executed within the `my-profile` directory:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start the production server
npm run start

# Run linting
npm run lint
```

## Development Conventions

- **Next.js App Router:** Follow the App Router conventions for routing and layouts.
- **Tailwind CSS 4:** Use Tailwind's utility-first approach for styling. Note that this project uses Tailwind CSS v4, which has some differences in configuration compared to v3.
- **TypeScript:** Ensure all new components and functions are properly typed.
- **Linting:** Adhere to the rules defined in `eslint.config.mjs`.

## Key Files

- `my-profile/package.json`: Project dependencies and scripts.
- `my-profile/app/page.tsx`: The main entry point for the profile page.
- `my-profile/app/layout.tsx`: Root layout with font and global style configurations.
- `my-profile/app/globals.css`: Global CSS and Tailwind directives.
