export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withLocaleProvider = (Story, context) => {
    return (
        <Story {...context} />
    );
};

export const decorators = [withLocaleProvider];