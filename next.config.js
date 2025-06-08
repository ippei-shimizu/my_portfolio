/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "qiita-user-contents.imgix.net",
      "images.microcms-assets.io",
      "buzzbase.jp",
      "files.speakerdeck.com",
      "giftsakuma.com",
      "nagataki.xyz",
      "stampmura.com",
      "toku5.style",
      "hairroom-hacci.jp",
      "parabolainc.jp",
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
