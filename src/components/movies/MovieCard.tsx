import React from "react";

import Image from "next/image";

// Types
import { Movie } from "@/utils/types/Movie";

// Icons
import { PlayCircle, PlusCircle, MinusCircle } from "lucide-react";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="relative h-40 group" key={movie.id}>
      <Image
        className="reounded-sm absolute w-full h-full object-cover"
        src={movie.imageString}
        alt={`Image fron the Movie ${movie.title}`}
        width={500}
        height={400}
      />

      <div className="absolute h-full w-full bottom-10 sm:bottom-2 lg:bottom-10 transform transition duration-300 group-hover:scale-100 group-hover:sm:scale-110 group-hover:md:scale-125 opacity-0 group-hover:opacity-100 z-10 shadow-sm">
        <div className="absolute h-full w-full top-0">
          <Image
            className="relative -z-10 rounded-sm object-cover"
            src={movie.imageString}
            alt={`Image fron the Movie ${movie.title}`}
            width={1000}
            height={900}
          />

          <div className="relative bottom-20 h-[120px] flex flex-col bg-gray-900 py-4 px-4">
            <div className="flex gap-x-2">
              <PlayCircle className="cursor-pointer" />
              {movie.WatchLists ? (
                <PlusCircle className="cursor-pointer" />
              ) : (
                <MinusCircle className="cursor-pointer" />
              )}
            </div>
            <h2 className="mt-2 text-xl font-semibold">{movie.title}</h2>
            <div className="flex gap-x-3 items-center mt-2">
              <span className="text-xs text-green-500">
                {Math.floor(Math.random() * 11) + 90}% Match
              </span>
              <span className="border border-gray-500 px-1 py-[2px] text-xs text-gray-400">
                + {movie.age}
              </span>
              <span className="text-xs text-gray-400">{movie.duration} hs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
