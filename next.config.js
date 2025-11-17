/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
// Site is deployed to root of GitHub Pages, so basePath should be empty
const basePath = "";
const assetPrefix = "";

const nextConfig = {
	output: "export",
	reactStrictMode: true,
	basePath,
	assetPrefix,
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	env: {
		NEXT_PUBLIC_BASE_PATH: basePath,
	},
};

module.exports = nextConfig;
