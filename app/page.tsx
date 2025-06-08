import { note } from "app/article/note";
import { onesite } from "app/article/onesite";
import { productionAchievements } from "app/article/production_achievements";
import { qiita } from "app/article/qiita";
import { zenn } from "app/article/zenn";
import ArticleItem from "app/components/article_item";
import { speakerDecks } from "app/speaking/speaker-deck";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="md:pt-10">
      <div className="grid gap-y-2 mb-3 md:grid-cols-[auto_1fr] md:gap-x-4 md:items-center md:mb-8">
        <Image
          src="/profile.jpg"
          alt=""
          width={80}
          height={80}
          className="rounded-full"
        />
        <h1 className="text-xl md:text-2xl font-semibold tracking-tighter">
          清水 一平｜Ippei Shimizu
        </h1>
      </div>
      {/* About */}
      <div>
        <p className="text-sm md:text-base">1996年生まれ / 神奈川県在住</p>
        <p className="text-sm md:text-base">
          大学卒業後、社会人硬式野球に取り組んだのちに、2021年からコーダーとしてWeb制作のキャリアをスタートしました。<br />
          その後、エンジニアにキャリアチェンジし、現在は株式会社RUNTEQでエンジニア兼講師として働いています。
        </p>
      </div>
      <div className="my-5 md:my-8 grid gap-y-6">
        {/* 個人開発 */}
        <div>
          <h3 className="font-bold text-[18px] mb-2">🧑‍💻 個人開発</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="block mt-1 border border-gray-600 rounded overflow-hidden">
              <Link href="https://buzzbase.jp/" target="_blank" className="">
                <Image
                  src="https://buzzbase.jp/opengraph-image.png?55ff9c44125f3530"
                  alt=""
                  width={1200}
                  height={630}
                  className="w-full h-auto"
                />
              </Link>
              <div className="p-2">
                <Link href="https://buzzbase.jp/" target="_blank">
                  <h4 className="font-bold text-base my-1">BUZZ BASE</h4>
                </Link>
                <p className="text-sm">
                  野球の個人成績を記録して、チーム内外の友達とランキング形式で成績を共有することができるアプリです。
                </p>
                <div className="grid gap-y-0.5 mt-1">
                  <Link href="https://buzzbase.jp/" target="_blank">
                    <p className="text-xs text-blue-500">
                      https://buzzbase.jp/
                    </p>
                  </Link>
                  <Link
                    href="https://github.com/ippei-shimizu/buzzbase"
                    target="_blank"
                  >
                    <p className="text-xs text-blue-500">GitHub</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="block mt-1 border border-gray-600 rounded overflow-hidden">
              <Link
                href="https://www.onesite-web.com/"
                target="_blank"
                className=""
              >
                <Image
                  src="/onesite-ogp.jpg"
                  alt=""
                  width={1200}
                  height={630}
                  className="w-full h-auto"
                />
              </Link>
              <div className="p-2">
                <Link href="https://www.onesite-web.com/" target="_blank">
                  <h4 className="font-bold text-base my-1">Onesite</h4>
                </Link>
                <p className="text-sm">
                  Web制作についての技術的な情報を発信している個人ブログです。
                </p>
                <div className="grid gap-y-0.5 mt-1">
                  <Link href="https://www.onesite-web.com/" target="_blank">
                    <p className="text-xs text-blue-500">
                      https://www.onesite-web.com/
                    </p>
                  </Link>
                  <Link
                    href="https://github.com/ippei-shimizu/onesite"
                    target="_blank"
                  >
                    <p className="text-xs text-blue-500">GitHub</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 記事 */}
        <div>
          <h3 className="font-bold text-[18px] mb-2">📚 記事</h3>

          <div className="grid gap-y-6">
            <div>
              <h4 className="font-bold text-base mb-1">◼︎ Zenn</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2">
                {zenn.map((item) => (
                  <ArticleItem item={item} key={item.position} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-base mb-1">◼︎ Qiita</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2">
                {qiita.map((item) => (
                  <ArticleItem item={item} key={item.position} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-base mb-1">◼︎ note</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2">
                {note.map((item) => (
                  <ArticleItem item={item} key={item.position} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-base mb-1">◼︎ 個人ブログ</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2">
                {onesite.map((item) => (
                  <ArticleItem item={item} key={item.position} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 登壇 */}
        <div>
          <h3 className="font-bold text-[18px] mb-2">🗣️ 登壇</h3>

          <div className="grid gap-y-6">
            <div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2">
                {speakerDecks.map((item) => (
                  <ArticleItem item={item} key={item.position} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 制作実績 */}
        <div>
          <h3 className="font-bold text-[18px] mb-2">🏆 制作実績</h3>
          <p className="text-sm mb-4">
            これまでご対応させていただいたWeb制作案件の一部になります。
          </p>
          <div className="grid gap-y-6">
            <div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2">
                {productionAchievements.map((item) => (
                  <ArticleItem item={item} key={item.position} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* スキル */}
        <div>
          <h3 className="font-bold text-[18px] mb-2">🛠️ スキル</h3>
          <div className="grid gap-y-4">
            <div>
              <h4 className="font-bold text-base mb-1">◼︎ フロントエンド</h4>
              <p className="text-sm">
                JavaScript / TypeScript / React / Next.js / jQuery / HTML / CSS
                / Scss
              </p>
            </div>

            <div>
              <h4 className="font-bold text-base mb-1">◼︎ バックエンド</h4>
              <p className="text-sm">Ruby / Ruby on Rails</p>
            </div>

            <div>
              <h4 className="font-bold text-base mb-1">◼︎ データベース</h4>
              <p className="text-sm">MySQL / PostgreSQL</p>
            </div>

            <div>
              <h4 className="font-bold text-base mb-1">◼︎ CMS</h4>
              <p className="text-sm">WordPress / microCMS</p>
            </div>

            <div>
              <h4 className="font-bold text-base mb-1">◼︎ ツール・その他</h4>
              <p className="text-sm">
                Git / GitHub / Docker / Figma / Adobe XD / Adobe Illustrator /
                Adobe Photoshop
              </p>
            </div>
          </div>
        </div>

        {/* キャリア */}
        <div>
          <h3 className="font-bold text-[18px] mb-2">🍀 キャリア</h3>
          <div className="grid gap-y-4">
            <div>
              <h4 className="font-bold text-base mb-1">◼︎ 株式会社RUNTEQ</h4>
              <div className="flex gap-x-2">
                <p className="text-sm">2024.05 〜</p>
                <p className="text-sm font-bold">Webエンジニア兼講師</p>
              </div>
              <p className="text-sm mt-1">
                使用技術 : Ruby / Ruby on Rails / React / Next.js / TypeScript
              </p>
              <ul className="mt-1 text-sm list-disc list-inside grid gap-y-1">
                <li>
                  Ruby on Railsを使用したWebアプリケーションの開発業務を担当。
                </li>
                <li>新規プロダクト、新規機能開発を担当。</li>
                <li>講師業務</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-base mb-1">◼︎ 株式会社MediBang</h4>
              <div className="flex gap-x-2">
                <p className="text-sm">2023.02 〜 2024.03</p>
                <p className="text-sm font-bold">コーダー</p>
              </div>
              <p className="text-sm mt-1">
                使用技術 : HTML / CSS / Scss / JavaScript / jQuery / WordPress /
                Vue.js / Flutter
              </p>
              <ul className="mt-1 text-sm list-disc list-inside grid gap-y-1">
                <li>
                  JSP / jQuery / HTML / CSS / Scss
                  を使用した、ネットプリントサービスのコーディング業務を担当。
                </li>
                <li>
                  Flutterを使用したWebViewアプリのUI修正などの実装を担当。
                </li>
                <li>
                  WordPressを使用したオウンドメディアの新規・改修業務を担当。
                </li>
                <li>
                  Vue.js / Nuxt .js
                  を使用した自社コーポレートサイトのフロントエンドを担当。
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-base mb-1">
                ◼︎ 株式会社オズプリンティング
              </h4>
              <div className="flex gap-x-2">
                <p className="text-sm">2021.10 〜 2023.01</p>
                <p className="text-sm font-bold">コーダー</p>
              </div>
              <p className="text-sm mt-1">
                使用技術 : HTML / CSS / Scss / JavaScript / jQuery / WordPress
              </p>
              <ul className="mt-1 text-sm list-disc list-inside grid gap-y-1">
                <li>
                  WordPress / HTML / CSS / Scss / JavaScript / jQuery
                  を使用したWeb制作業務に従事。
                </li>
                <li>
                  WordPressを使用した自社・受注サイトのコーディング業務を担当。WordPressのカスタマイズやJavaScriptを使用したアニメーションの実装を行う。
                </li>
                <li>
                  進行管理、サイト設計、ワイヤーフレーム作成、Webデザインなども担当。
                </li>
                <li>
                  IllustratorやPhotoshopを使用したDTPオペレーター業務を担当。
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* お問い合わせ */}
        <div>
          <h3 className="font-bold text-[18px] mb-2">📩 お問い合わせ</h3>
          <p className="text-sm">
            お仕事のご依頼やご相談などがございましたら、以下のメールアドレスまでご連絡ください。
          </p>
          <p className="text-sm mt-1">
            <a
              href="mailto:ippei.shimizu.32@gmail.com"
              className="text-blue-500"
            >
              ippei.shimizu.32@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
