# get-faded-santa-cruz

A modern web application built with Astro, React, and shadcn/ui.

## ⚠️ Use pnpm only!

This project uses **pnpm** exclusively. Do not use npm, yarn, or bun.

## Prerequisites

- Node.js 20+ (see `.node-version`)
- pnpm 9+ (`npm install -g pnpm`)

## Getting Started

```sh
# Clone the repository
git clone https://github.com/mllvzeth/get-faded-santa-cruz.git
cd get-faded-santa-cruz

# Install dependencies (pnpm only!)
pnpm install

# Start development server
pnpm dev
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm dev:cf` - Start Astro dev with Cloudflare adapter/runtime
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm preview:cf` - Build and preview through Wrangler (Workers runtime)
- `pnpm typecheck` - Run Astro type checks
- `pnpm types` - Generate Cloudflare runtime binding types
- `pnpm deploy:staging` - Deploy to Cloudflare Workers staging environment
- `pnpm deploy` - Deploy to Cloudflare Workers production environment
- `pnpm lint` - Run ESLint

## Deployment

This project targets **Cloudflare Workers** using `wrangler.jsonc`.

### Cloudflare Workers Setup

1. Install dependencies and build once locally:
   - `pnpm install`
   - `pnpm build`
2. Authenticate Wrangler:
   - `pnpm wrangler login`
3. Configure staging/production bindings and secrets:
   - Create KV namespace(s) for `SESSION` as needed
   - Add secrets via `pnpm wrangler secret put <KEY>`
4. Deploy:
   - `pnpm deploy:staging`
   - `pnpm deploy`

### Preview Deployments

Use `pnpm preview:cf` to preview built output in the Workers runtime.

## Tech Stack

- [Astro](https://astro.build/) - Web framework
- [React](https://react.dev/) - UI library
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Keystatic](https://keystatic.com/) - Content management
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) - Hosting/runtime
