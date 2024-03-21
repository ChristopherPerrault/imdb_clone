import React from "react";
import Results from "@/app/_components/Results";

interface SearchParams {
  searchTerm: string;
}

interface SearchResult {
  id: string;
  original_title: string;
  overview: string;
  vote_count: number;
}

interface SearchPageProps {
  params: SearchParams;
}

const SearchPage: React.FC<SearchPageProps> = async ({ params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
  );
  if (!res.ok) {
    throw new Error("There was an error fetching data");
  }

  const data = await res.json();
  const searchResults: SearchResult[] = data.results;

  return (
    <div>
      {searchResults && searchResults.length === 0 && (
        <h1 className="pt-6 text-center">
          No results found. Try another search.
        </h1>
      )}

      {searchResults && <Results results={searchResults} />}
    </div>
  );
};

export default SearchPage;
