import prisma from "./db";

export async function getFirtsMovie() {
  const data = await prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      videoSource: true,
      imageString: true,
      release: true,
      duration: true,
      id: true,
      age: true,
    },
  });

  return data;
}

export async function getRecentlyMovies() {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      title: true,
      WatchLists: true,
      imageString: true,
      videoSource: true,
      youtubeString: true,
      duration: true,
      age: true,
      release: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

  return data;
}

export async function getCategoryMovie(category: string) {
  switch (category) {
    case "shows": {
      const data = await prisma.movie.findMany({
        where: {
          category: "show",
        },
        select: {
          title: true,
          overview: true,
          videoSource: true,
          imageString: true,
          release: true,
          duration: true,
          youtubeString: true,
          WatchLists: true,
          id: true,
          age: true,
        },
      });

      return data;
    }
    case "movies": {
      const data = await prisma.movie.findMany({
        where: {
          category: "movie",
        },
        select: {
          title: true,
          overview: true,
          videoSource: true,
          imageString: true,
          release: true,
          duration: true,
          youtubeString: true,
          WatchLists: true,
          id: true,
          age: true,
        },
      });

      return data;
    }
    case "new": {
      const data = await prisma.movie.findMany({
        where: {
          category: "recent",
        },
        select: {
          title: true,
          overview: true,
          videoSource: true,
          imageString: true,
          release: true,
          duration: true,
          youtubeString: true,
          WatchLists: true,
          id: true,
          age: true,
        },
      });

      return data;
    }

    default: {
      throw new Error("We don`t have that category");
    }
  }
}
