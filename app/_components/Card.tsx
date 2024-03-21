import Link from "next/link";
import Image from "next/image";
import { IoThumbsUpOutline } from "react-icons/io5";

interface Result {
  id: string;
  backdrop_path?: string;
  poster_path?: string;
  overview: string;
  title?: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
  vote_count: number;
}

interface CardProps {
  result: Result;
}

const Card: React.FC<CardProps> = ({ result }) => {
  return (
    <div className="transition-shadow duration-200 rounded-lg cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 sm:m-2 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt="image not found"
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity-200"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div className="p-2">
          <p className="line-clamp-2">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <IoThumbsUpOutline className="h-5 ml-3 mr-1" /> {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
