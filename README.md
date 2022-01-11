# sb-decorator-issue

## Steps
yarn install
yarn storybook

## Changes 
Based on sb@next additional code got added:

```
// .storybook/previes.js
const withStory = (Story, context) => {
    return (
        <Story {...context} />
    );
};

export const decorators = [withStory]; 
```

```
// .storybook/main.js
  reactOptions: {
    strictMode: true,
  }, 
```
