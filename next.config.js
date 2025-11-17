/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/webpage" : "";
const assetPrefix = isProd ? "/webpage" : "";

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
