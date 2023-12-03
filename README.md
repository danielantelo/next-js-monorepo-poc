# Roser coding challenge

## Structure

I bootstrapped a monorepo using [`create-react-yarn-workspace`](https://www.npmjs.com/package/create-react-workspaces). 

> **_NOTE:_**  Opted not to use nx, it is a great tool but it has it shortcomings, this is a great follow up topic to discuss.

The structure is pretty simple:

|- **apps/**: top level apps: Website, LiveMarket, AdminPortal, etc.
| |- **webapp/**
|- **features/**: main entry for a feature and its pages, usually tied to app frameworks
|- **devtools/**: development tools (cypress, storybook, jest configs etc)
| |- **storybook/**
| |- **cypress/**
|- **packages/**: app agnostic, independently versionable packages
| |- **api/**: data providers
| |- **ui**: base ui
| |- **components/**: shared components
| |- **utils/**: shared utilities and helpers

The idea here is that you can have multiple consuming **apps** (web and mobile), these should be as leightweight as possible and delegate routes to a lazy loaded **feature**. Features compose multiple **components** making use of  **apis** and **utils**.

## Approach

I'll be tackling this challenge in a bottom up approach, making use of storybook I will create an initial set of components for the live market using mocked data. I will then compose these into a page and hook them up to use data fetched from an api serving the provided json files.

## Testing

Code confidence is THE most important thing for releasing software, so it is important to cover your back from all angles! For this challenge we include:

- **unit tests** using jest and react-testing-library, run with `npm run tests`
- **visual regression component tests** using cypress and storybook, run with `npm run cy:storybook` and you can view regression snapshots in `cypress/snapshots/storybook`
- **functional and visual regression page tests** using cypress and mocking the backend of the react app capture full page snapshots and ensure main functionality works via the browser, run with `npm run cy` and you can view snapshots in `cypress/snapshots`

In a production ready setup we would also add **e2e tests** against a deployed instance and pontentially some sort of **contract tests** for the api's.

## What is missing that I would have liked to include

