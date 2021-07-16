/* eslint-disable
		@typescript-eslint/no-var-requires
*/
// ここを参考にhttps://nextjs.org/docs/api-reference/next.config.js/introduction
//https://github.com/vercel/next.js/blob/canary/examples/with-env-from-next-config-js/next.config.js

const path = require('path')

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {
	return {
		webpack(config) {
			config.resolve.alias['~'] = path.join(__dirname, 'src')
			config.resolve.alias['@'] = path.join(__dirname, 'src/components')
			return config
		},
		link: [
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap',
			},
		],
	}
}
