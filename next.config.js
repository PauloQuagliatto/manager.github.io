/** @type {import('next').NextConfig} */
const withImages = require("next-images");
const withPwa = require("next-pwa");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([
  { reactStrictMode: true, esModule: true },
  [
    withImages,
    {
      images: {
        domains: ["magic-meal.s3.sa-east-1.amazonaws.com"],
      },
    },
  ],
  [
    withPwa,
    {
      pwa: {
        dest: "public",
        sw: "/sw.js",
      },
    },
  ],
]);
