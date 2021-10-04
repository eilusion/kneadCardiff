var path = require("path");

module.exports = {
  core: {
    builder: "webpack5",
  },
  "stories": [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/preset-scss',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: config => {
      // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
      const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
      fileLoaderRule.exclude = /\.svg$/;  

      config.module.rules.push({
        test: /\.svg$/,
        enforce: 'pre',
        loader: require.resolve('@svgr/webpack'),
      });

      return config;
  } 
}