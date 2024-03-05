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

export async function getMovies() {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      title: true,
      WatchLists: true,
      imageString: true,
      videoSource: true,
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
      duration: true,
      age: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

  return data;
}
