import type { Metadata } from "next";
import { Karma } from "next/font/google";
import "./globals.css";
import Header from "./_components/header/Header";
import Providers from "./Providers";
import Navbar from "./_components/navbar/Navbar";
import SearchBar from "./_components/SearchBar";

const karma = Karma({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  title: "IMDb Clone",
  description:
    "A basic IMDb clone made with Next.js, Tailwind, and Typescript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karma.className}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
