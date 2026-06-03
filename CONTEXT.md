# Neon ESLint Config

This package publishes shared lint configuration for ESLint and Oxlint consumers.

## Language

**Oxlint Config Module**:
An importable Oxlint configuration provided by this package for composition inside a consumer-owned Oxlint config file.
_Avoid_: TypeScript config equivalent, generated TS config

**JS Plugin Config**:
An Oxlint configuration variant that passes unsupported ESLint plugin rules through Oxlint's JavaScript plugin bridge.
_Avoid_: JS plugins JSON, plugin fallback config

**Oxlint Index Module**:
An importable module that re-exports this package's Oxlint Config Modules as named exports.
_Avoid_: Oxlint aggregation JSON, config bundle
