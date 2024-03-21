"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!search) return;

    router.push(`/search/${search}`);
  };

  return (
    <form
      className="flex items-center justify-between max-w-6xl px-5 mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        className="flex-1 w-full placeholder-gray-500 bg-transparent rounded-sm outline-none h-14"
        type="text"
        placeholder="Search for a movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="text-blue-400 disabled:text-gray-400"
        disabled={!search}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
