## Steps
yarn install
yarn storybook

## Changes 
Based on sb@next init additional code got added:

```
// .storybook/preview.js
export const decorators = [(Story) => <Story />];
```

```
// .storybook/main.js
  reactOptions: {
    strictMode: true,
  }, 
```
