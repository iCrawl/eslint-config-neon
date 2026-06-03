# Publish importable Oxlint config modules

Oxlint consumers can use package imports from a consumer-owned `oxlint.config.ts`, so this package will publish importable Oxlint config modules as the default `./oxlint/*` export shape while preserving JSON artifacts behind `./oxlint/*.json`. The modules and JSON files will be generated from the same translated configuration data, with generated module files committed under `src/oxlint/` so the existing build produces typed ESM and CJS outputs.

## Consequences

The public `./oxlint/*` path becomes a module-oriented API, while users that need raw JSON must include the `.json` suffix. JS plugin passthrough configs keep the existing `.jsplugins` naming in both module and JSON forms.
