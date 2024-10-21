/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
	reactStrictMode: true,
	output: "export", // Enable static site generation
	basePath: isProd ? '/webpage' : '', // Use 'webpage' as the basePath
	assetPrefix: isProd ? '/webpage/' : '',
	images: {
		unoptimized: true, // Disable image optimization for static export
	},
};

module.exports = nextConfig;
