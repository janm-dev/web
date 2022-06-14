/** @type {import('next').NextConfig} */

const createNextPluginPreval = require("next-plugin-preval/config")
const withNextPluginPreval = createNextPluginPreval()

module.exports = withNextPluginPreval({
	reactStrictMode: true,

	redirects: async () => [
		{
			source: "/github",
			destination: "https://github.com/janm-dev",
			permanent: true
		},
		{
			source: "/source",
			destination: "https://github.com/janm-dev/web",
			permanent: true
		}
	],
	
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"]
		})

		return config
	}
})
