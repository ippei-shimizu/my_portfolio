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
  async redirects() {
    return [
      {
        source: "/fb6bb91bf25d48aca4543ca056cab3dd",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
