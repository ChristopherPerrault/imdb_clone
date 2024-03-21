"use client";

import Link from "next/link";
import { useSearchParams, ReadonlyURLSearchParams } from "next/navigation";

interface NavbarItemProps {
  title: string;
  param: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ title, param }) => {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const genre: string | null = searchParams.get("genre");

  return (
    <>
      <Link
        className={`m-4 hover:text-blue-300 font-semibold p-2 ${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-blue-500 rounded-lg"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </>
  );
};

export default NavbarItem;
