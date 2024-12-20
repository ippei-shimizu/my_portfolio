module.exports = {
  root: true, // これにより、プロジェクトの設定を優先
  extends: [
    "next/core-web-vitals", // Next.js推奨設定
    "plugin:react/recommended", // React向け推奨設定
  ],
  plugins: ["react"], // reactプラグインを明記
  settings: {
    react: {
      version: "detect", // Reactのバージョンを自動検出
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
