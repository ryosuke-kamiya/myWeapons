const path = require('path');

module.exports = {
	webpackFinal: async (config) => {
		config.resolve.alias['~'] = path.resolve(__dirname, '../src/');
		config.resolve.alias['@'] = path.resolve(__dirname, '../src/components');
		return config;
	},
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
		"@storybook/addon-essentials",
		'@storybook/preset-scss',
		'@storybook/addon-viewport/register',
		'@storybook/addon-a11y',
	]
}
