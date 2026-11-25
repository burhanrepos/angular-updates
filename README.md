# Angular Updates

What changed in every major Angular release from v14 to v22, with a small live demo for each version.

**Live site:** https://burhanrepos.github.io/angular-updates/

| Version | Released | Headline | Demo |
|---|---|---|---|
| [22](https://burhanrepos.github.io/angular-updates/#/22) | 2026-06 | OnPush by default, Signal Forms stable, `debounced()`, `injectAsync()` | `debounced()` search box |
| [21](https://burhanrepos.github.io/angular-updates/#/21) | 2025-11 | Signal Forms (experimental), zoneless by default, Vitest | Signal Forms email field |
| [20](https://burhanrepos.github.io/angular-updates/#/20) | 2025-05 | Signal APIs stable, `httpResource`, zoneless preview | `**` and template literals in templates |
| [19](https://burhanrepos.github.io/angular-updates/#/19) | 2024-11 | Standalone by default, `linkedSignal()`, `resource()` | `linkedSignal` + `resource` picker |
| [18](https://burhanrepos.github.io/angular-updates/#/18) | 2024-05 | Experimental zoneless, `@let`, `ng-content` fallback | `@let` total and fallback content |
| [17](https://burhanrepos.github.io/angular-updates/#/17) | 2023-11 | `@if` / `@for` / `@switch`, `@defer`, Vite builder | Control flow list and `@defer` block |
| [16](https://burhanrepos.github.io/angular-updates/#/16) | 2023-05 | Signals, required inputs, `takeUntilDestroyed` | `signal` / `computed` / `effect` counter |
| [15](https://burhanrepos.github.io/angular-updates/#/15) | 2022-11 | Standalone stable, directive composition | `hostDirectives` card |
| [14](https://burhanrepos.github.io/angular-updates/#/14) | 2022-06 | Typed reactive forms, standalone preview | Typed `FormGroup` |

Each version page links to the official release notes.

## Run locally

Needs Node.js 22.22+ or 24.15+.

```bash
npm install
npm start        # http://localhost:4200
npm test         # Vitest
npm run build
```

## Project layout

- `src/app/versions.ts`: the version list and highlights. Add a new release here.
- `src/app/demos.ts`: one small demo component per version.
- `src/app/version-page.ts`: renders a version's highlights and its demo.

## Adding a new version

1. Add an entry at the top of `VERSIONS` in `src/app/versions.ts`.
2. Add a demo component to `src/app/demos.ts` and register it in `DEMOS`.
3. Add a row to the table above.

Pushing to `master` deploys the site to GitHub Pages through `.github/workflows/deploy.yml`.
