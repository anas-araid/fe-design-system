<p align="center">
  <img src=".storybook/brand/assets/prima-logo.svg" alt="Prima" width="140" />
</p>

A shared set of UI components for Prima's web products, built with React and documented in Storybook.

## Components

- Tabs
- Badge

Each component is documented in Storybook, together with its variants and current status.

## Project structure

```
src/
  components/   Tabs and Badge, each with its own styles, tests and stories
  hooks/        Shared hook
  tokens/       CSS design tokens
  stories/      Storybook-only docs
```

## Install and run

```bash
# Install dependencies
# This project uses pnpm, but npm or yarn also work.
pnpm install

# Start the app
pnpm dev

# Run Storybook
pnpm storybook

# Run tests
pnpm test
```

## Figma file

The Figma file is available [here](https://www.figma.com/design/OclakAGLSXDoMKLFvwLNMP/%F0%9F%92%BB-Design-System-Home-Test---Tabs-Component?node-id=0-1&t=4pG7NN6HKxgxroDz-1).
