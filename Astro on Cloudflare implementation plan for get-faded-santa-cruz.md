# Problem statement
Define a reliable, documented deployment path for this Astro repository on Cloudflare using current platform guidance, and remove ambiguity between Pages-style and Workers-style configuration so local preview, CI deploys, and runtime bindings behave consistently.
## Current state
The project is already configured for Astro server output with the Cloudflare adapter (`astro.config.mjs:8-11`).
Cloudflare config currently uses `wrangler.toml` with `pages_build_output_dir`, `nodejs_compat`, and a placeholder KV namespace ID (`wrangler.toml:1-9`).
Scripts only cover local Astro workflows (`package.json:10-15`) and do not yet provide an explicit Cloudflare deploy/preview/typegen workflow.
The primary page is prerendered (`src/pages/index.astro:20`), but the app includes Keystatic integration and session KV expectations (`README.md:47-60`), so runtime/bindings still need to be handled explicitly.
## Proposed approach
Adopt one canonical Cloudflare target for this repo and align all files to it. Based on current Cloudflare recommendations, prefer Workers deployment unless there is a hard requirement to stay on Pages.
If Workers is selected, normalize Wrangler config to Workers-style fields (`main`, `assets`, `compatibility_date`, `compatibility_flags`, optional observability) and keep Astro Cloudflare adapter enabled for server/runtime support.
If Pages is selected instead, keep `pages_build_output_dir`, ensure Pages-compatible deploy commands are used, and remove any Workers-only assumptions.
Update package scripts to include explicit Cloudflare workflows using pnpm: build+preview (`wrangler dev` or `wrangler pages dev`), deploy, and type generation (`wrangler types`) so local and CI behavior match.
Formalize environment/binding setup: create and bind `SESSION` KV for each environment, define non-secret vars in Wrangler config, and manage secrets through `wrangler secret put` with `.dev.vars` for local development.
Add/refresh runtime typing (`env.d.ts`/App.Locals typing) so bindings are type-safe inside Astro routes/components, and document the workflow in README (setup, deploy commands, required Cloudflare dashboard settings, and troubleshooting like hydration/Auto Minify).
## Validation and rollout
Validate locally by running Astro build then Wrangler local preview against the selected target and confirming pages render, assets serve correctly, and bindings resolve.
Run project checks with pnpm scripts (`pnpm run check`, targeted lint) before first deployment.
Perform first deploy from CLI, verify the Cloudflare URL output, then configure Git-based CI/CD in Cloudflare dashboard with matching build/deploy commands and environment bindings.