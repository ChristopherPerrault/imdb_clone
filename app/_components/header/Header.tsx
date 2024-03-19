import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import TopNavItem from "./TopNavItem";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl py-6 mx-2 sm:mx-auto">
      <div className="flex items-center space-x-5">
        <div className="flex">
          <TopNavItem title="HOME" url="/" Icon={FiHome} />
          <TopNavItem title="ABOUT" url="/about" Icon={AiOutlineInfoCircle} />
        </div>

        <DarkModeToggle />
        <Link href="/">
          <h2>
            <span className="px-2 py-1 mr-1 font-bold rounded-lg bg-blue-500">
              IMDb
            </span>
            <span className="hidden text-xl sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
