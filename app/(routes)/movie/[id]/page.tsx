"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "@/app/loading";

interface Movie {
  backdrop_path?: string;
  poster_path?: string;
  title?: string;
  name?: string;
  overview: string;
  release_date?: string;
  first_air_date?: string;
  vote_count: number;
}

interface MoviePageProps {
  params: {
    id: string;
  };
}

async function getMovie(movieId: string): Promise<Movie> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return await res.json();
}

const MoviePage: React.FC<MoviePageProps> = ({ params }) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await getMovie(params.id);
      console.log(movieData);
      setMovie(movieData);
    };

    fetchMovie();
  }, [params.id]);

  if (!movie) {
    return <Loading />;
  }

  // Construct the image URL only if backdrop_path or poster_path is defined
  const imageUrl =
    movie.backdrop_path || movie.poster_path
      ? `https://image.tmdb.org/t/p/original/${
          movie.backdrop_path || movie.poster_path
        }`
      : "/spinner.svg"; // if image not found, uses this spinner
      //! TODO: find a more appropriate "not found" svg icon

  return (
    <div className="w-full">
      <div className="flex flex-col items-center content-center max-w-6xl p-4 mx-auto md:pt-8 md:flex-row md:space-x-6">
        <Image
          src={imageUrl}
          width={500}
          height={300}
          alt="movie image not found"
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{ maxWidth: "100%", height: "100%" }}
        />
        <div className="p-2">
          <h2 className="mb-3 text-lg font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="mb-3 text-lg">
            <span className="mr-1 font-semibold">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="mr-1 font-semibold">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="mr-1 font-semibold">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
