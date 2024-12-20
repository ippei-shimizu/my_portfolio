/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "qiita-user-contents.imgix.net",
      "images.microcms-assets.io",
      "buzzbase.jp",
    ],
  },
};

module.exports = nextConfig;
