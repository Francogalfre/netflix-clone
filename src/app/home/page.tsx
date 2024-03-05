import React from "react";

// Movies Components
import MovieVideo from "@/components/movies/MovieVideo";
import RecentlyMovies from "@/components/movies/RecentlyMovies";

export default function HomePage() {
  return (
    <div className="w-full px-12 lg:px-16">
      <MovieVideo />
      <h1 className="text-4xl font-semibold">Recently Movies</h1>
      <RecentlyMovies />
    </div>
  );
}
