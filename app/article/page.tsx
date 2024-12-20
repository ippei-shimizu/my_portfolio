import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My Article
      </h1>
      <div>
        <div>
          <h2 className="font-bold text-xl">Zenn</h2>
        </div>
        <div>
          <h2 className="font-bold text-xl">Qiita</h2>
        </div>
      </div>
    </section>
  );
}
