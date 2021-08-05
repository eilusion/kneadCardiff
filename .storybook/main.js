module.exports = {
  "stories": [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
  ],
  webpackFinal: async (config, { configType }) => {
      config.module.rules.push({
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          include: path.resolve(__dirname, '../'),
      });

      return config;
  },
}