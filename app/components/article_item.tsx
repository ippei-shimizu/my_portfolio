import Image from "next/image";
import Link from "next/link";

export default function ArticleItem({ item }) {
  return (
    <Link
      key={item.position}
      href={item.url}
      target="_blank"
      className="border border-gray-600 rounded"
    >
      <Image
        src={item.thumbnail}
        alt=""
        width={200}
        height={100}
        className="rounded w-full h-auto"
      />
      <div className="p-2">
        <p className="text-sm font-bold">{item.title}</p>
        <span className="text-xs text-gray-300">{item.publishedAt}</span>
      </div>
    </Link>
  );
}
