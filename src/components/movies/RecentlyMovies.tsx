import React from "react";

import { getRecentlyMovies } from "@/utils/database/functions";

// Components
import MovieCard from "./MovieCard";

const RecentlyMovies = async () => {
  const movies = await getRecentlyMovies();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-8 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default RecentlyMovies;
