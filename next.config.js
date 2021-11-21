module.exports = {
  reactStrictMode: true
};

const withFonts = require('next-fonts');
const withImage = require('next-images');
const { withPlugins } = require('next-compose-plugins');
const withReactSvg = require('next-react-svg');
const path = require('path');

const nextConfig = {
  include: path.resolve(__dirname, './public/images'),
  webpack: config => config,
  reactStrictMode: true,
  images: {
    domains: ['localhost']
  }

};

module.exports = withPlugins([
  withFonts,
  withImage,
  withReactSvg
], nextConfig);