# Crypto Swap Widget — Front-End Test Task

Live demo: **[cogitize-fe-test-task-fork.vercel.app](https://cogitize-fe-test-task-fork.vercel.app)**

> Original task description: see [`TASK.md`](./TASK.md).

## Stack

Next.js 16 (App Router) · React 19 · Redux Toolkit + RTK Query · Framer Motion · next-intl · Tailwind CSS v4 · TypeScript. Architecture: **Feature-Sliced Design**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000  (root redirects to /guide)
```

Routes:

| Route | Description |
| ----- | ----------- |
| [/en/swap](https://cogitize-fe-test-task-fork.vercel.app/en/swap) · [/uk/swap](https://cogitize-fe-test-task-fork.vercel.app/uk/swap) | Task 1 — crypto swap widget |
| [/en/design](https://cogitize-fe-test-task-fork.vercel.app/en/design) · [/uk/design](https://cogitize-fe-test-task-fork.vercel.app/uk/design) | Task 2 — animated page |

Scripts: `npm run build`, `npm start`, `npm test`, `npm run lint`.

## Task 1 — Swap widget

- Token dropdown with **infinite scroll**, built on RTK Query `infiniteQuery` + `IntersectionObserver`.
- Default pair **USDT → BTC**; the search box filters via the same endpoint (changing the query restarts paging from page 1).
- **Two-way amount calculation**: editing either field recalculates the other; the preview request is **throttled to ≤ 1 request / 600 ms**.
- **Swap** button swaps the tokens (not the amounts) and recomputes; selecting a token resets both inputs.
- Confirm button is **disabled until a successful preview**; on click a success modal appears; **OK** resets the form.
- Framer Motion animations, `en` / `uk` localization, strict typing (no `any`).

## Task 2 — Animated page

Hero + three sections with scroll-reveal and interactive cards, plus one featured block with a continuous looping animation (Framer Motion).

## Notes & decisions

- **CORS / proxy.** The assets host (`api.miex.one`) does not return an `Access-Control-Allow-Origin` header, so a direct browser call is blocked. Both APIs are therefore proxied same-origin through `next.config` rewrites under `/proxy/*` (server-to-server). This is why the app needs a server runtime (e.g. Vercel) rather than static hosting.
- **Two-way binding without effects.** The edited field holds the raw input; the opposite field is *derived* from the preview response — no second state, no `setState` inside an effect.
- **FSD.** Business logic lives in `model/` hooks, UI stays presentational; slices expose a public API via `index.ts`.
- **Tests.** `npm test` covers the throttle hook and the asset row.

## Deploy

Deployed on **Vercel** (zero config — it runs the Next.js middleware and the API proxy automatically).
