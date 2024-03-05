import React from "react";

import { getCategoryMovie } from "@/utils/database/functions";

// Components
import MovieCard from "@/components/movies/MovieCard";

export default async function CategoryPage({
  params,
}: {
  params: { genre: string };
}) {
  const data = await getCategoryMovie(params.genre);

  console.log(data);

  return (
    <main className="w-full max-w-8xl px-12 lg:px-16">
      <h1 className="text-4xl font-semibold capitalize">{params.genre}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 mt-8 gap-10 md:gap-6">
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
