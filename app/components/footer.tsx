import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col flex-wrap space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/ippei_111"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">X</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ippei-shimizu"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">GitHub</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://zenn.dev/ippe"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Zenn</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://qiita.com/ippei_jp"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Qiita</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://note.com/ippei_shimiuzu"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">note</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://lapras.com/public/VKUSTBG"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">LAPRAS</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/people/%E6%B8%85%E6%B0%B4-%E4%B8%80%E5%B9%B3/pfbid0prQAJQVTRvwtkx3iFPfqEdknqBg5nTb6nE5h1fLCTrLsvUQnFsp3qis4DyQptxnDl/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Facebook</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://youtrust.jp/users/ippei_dev"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">YOUTRUST</p>
          </Link>
        </li>
        <li className="ml-0">
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://school.runteq.jp/social_portfolios/ippei"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">RUNTEQ Social Portfolio</p>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
