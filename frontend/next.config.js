/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.dog.ceo",
				port: "",
				pathname: "/**",
			},
		],
	},
	env: {
		SECRET_KEY: process.env.SECRET_KEY,
		API: process.env.API
	},
};

module.exports = nextConfig
