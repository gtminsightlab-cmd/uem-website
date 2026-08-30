# Upper Echelon Management Website

Public website for Upper Echelon Management (UEM), the operator-led commercialization firm behind the LaunchOS initiative.

## Content authority

Read [`AGENTS.md`](AGENTS.md) before changing the site. Public UEM and LaunchOS claims are controlled by:

- [`docs/UEM_LAUNCHOS_CONTENT_STANDARD.md`](docs/UEM_LAUNCHOS_CONTENT_STANDARD.md)
- [`docs/UEM_OPEN_CONTENT_QUESTIONS.md`](docs/UEM_OPEN_CONTENT_QUESTIONS.md)
- the LaunchOS source hierarchy under [`docs/launchos/`](docs/launchos/)

Do not restore unsupported case studies, prices, client outcomes, product histories, fake availability claims, or synthetic team representations.

## Local development

```powershell
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Verification

```powershell
npm run lint
npm run build
```

This website explains LaunchOS but is not the LaunchOS product application. Moving product code into this repository requires an explicit monorepo/application architecture decision.
