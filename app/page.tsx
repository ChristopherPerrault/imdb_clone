import Results from "./_components/Results";
import { Result } from "./types";

interface SearchParams {
  genre?: string;
}

// interface Result {
//   id: string;
//   original_title: string;
//   overview?: string;
//   vote_count?: number;
// }

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const Home: React.FC<{ searchParams: SearchParams }> = async ({
  searchParams,
}) => {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = await res.json();
  const results: Result[] = data.results;

  return (
    <>
      <Results results={results} />
    </>
  );
};

export default Home;
