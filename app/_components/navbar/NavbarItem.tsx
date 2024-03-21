"use client";
import { useSearchParams, ReadonlyURLSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

interface NavbarItemProps {
  title: string;
  param: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ title, param }) => {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const genre: string | null = searchParams.get("genre");

  return (
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
  );
};
// Suspense required for build as a fallback during fetch completion
export default function WrappedNavbarItem({ title, param }: NavbarItemProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavbarItem title={title} param={param} />
    </Suspense>
  );
}
