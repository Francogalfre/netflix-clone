import React from "react";

// Movies Components
import MovieVideo from "@/components/MovieVideo";

export default function HomePage() {
  return (
    <div className="w-full px-12 lg:px-16">
      <MovieVideo />
      <h1>We Think You'll Love These</h1>
    </div>
  );
}
