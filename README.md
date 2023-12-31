# Multi-Team NextJS Monorepo POC

## Structure

I bootstrapped a `yarn workspace` monorepo. The structure is pretty simple:

```
|- **apps/**: top level apps: Website, LiveMarket, AdminPortal, etc.
| |- **webapp/**
|- **features/**: main entry for a feature and its pages, usually tied to app frameworks
| |- **livemarket/**: feature for this exercise
|- **devtools/**: development tools (cypress, storybook, jest configs etc)
| |- **storybook/**
| |- **cypress/**
|- **packages/**: app agnostic, independently versionable packages
| |- **api/**: data providers
| |- **ui**: base ui
| |- **components/**: shared components
| |- **utils/**: shared utilities and helpers
```

The idea here is that you can have multiple consuming **apps** (web and mobile), these should be as leightweight as possible and delegate routes to a **feature**. Features compose multiple **components** making use of  **apis** and **utils** to form functionality.

> **_NOTE:_**  Opted not to use nx, it is a great tool but it has it shortcomings, this is a great follow up topic to discuss.


## Approach

I'll be tackling this challenge in a bottom up approach, making use of storybook I will create an initial set of components for the live market using mocked data. I will then compose these into a page and hook them up to use data fetched from an api serving the provided json files. To open storybook run `yarn storybook`

We try to keep the apps as lightweight as possible, usually only handling mapping routing to appropriate features.
Features will then ofcourse be heavily coupled to the apps, and will make use of their dependencies as peerDependencies. In this example each feature would have `Container` type entry points which handle the serer side data fetching and feed the data into a `presentational component` which then enhances itself client side with hooks.

### API

Data fetching is abstracted into a promised based `api/` package and can be used both server and client side. I have included a different fetch per type of order to be displayed, then a shorthand for fetching all orders in parallel async resolving via `Promise.all`, this is more performant than doing them individually.

### Page

We then have our `features/livemarket` package which has a `LiveMarketPageContainer` to fetch all orders server side and feed them to our presentational `LiveMarketPage` which makes use of a custom `userOrders` hook to update the ui accordingly.

For `accepting` and `rejecting` orders we have event handlers in our custom hook which currently have a placeholder for where we would call the backend to update order status, and it does an optimistic update on the ui to reflect the action, assuming the backend will eventually sync. (NOTE: the backend is missing so reloading the page will show original data - we could `persist state in session` if we wanted to be extra optimistic, but that's for another challenge...)

The page is composed using the `CollapsibleSection` and `OrdersTable` components which are purely presentational and app agnostic. These are expected to work on any JSX based app.

### Styling

I usually opt to use `Chakra` or `MaterialUI` for web based apps, and `NativeBase` for mobile based apps, as this take the whole css layer away from the equation and allow for prop driven design system components. For this challenged I am using `tailwind`, I prefer to keep the JSX components clean and `agnostic` so use `css modules` and apply tilwind styling through those. NOTE: this will then require a build config to make the styles `atomic` and remove duplication for a slimmer css file.

## Testing

Code confidence is THE most important thing for releasing software, so it is important to cover your back from all angles! For this challenge we include:

- **linting** using eslint we can catch some nasties and ensure consistent style, run with `yarn lint`
- **type checking**: get tsc to ensure there are no typing issues, run with `yarn typecheck`
- **unit tests** using jest and react-testing-library, run with `yarn test`
- **visual regression component tests** using cypress and storybook, run with `yarn cy:storybook` and you can view regression snapshots in `devtools/cypress/snapshots/storybook`
- **functional and visual regression page tests** using cypress and mocking the backend of the react app capture full page snapshots and ensure main functionality works via the browser, run with `yarn cy` and you can view snapshots in `devtools/cypress/snapshots`

All the above checks should run on PR and block merge if any issues.

In a production ready setup we would also add **e2e tests** against a deployed instance to run on master alognside the deployment tasks.

## Dockerized

Build and run with:

```
docker build --tag pocApp .
docker run -p 3000:3000 -e API_HOST="http://host.docker.internal:3000" pocApp
```