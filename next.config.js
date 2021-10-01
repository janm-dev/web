/** @type {import('next').NextConfig} */

const createNextPluginPreval = require("next-plugin-preval/config")
const withNextPluginPreval = createNextPluginPreval()

module.exports = withNextPluginPreval({
	reactStrictMode: true,

	redirects: async () => [
		{
			source: "/github",
			destination: "https://github.com/janmml",
			permanent: true
		},
		{
			source: "/discord",
			destination: "https://discord.gg/CEw4Nna",
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
