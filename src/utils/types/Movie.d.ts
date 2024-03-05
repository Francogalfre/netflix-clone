export interface Movie {
  id: number;
  imageString: string;
  title: string;
  overview: string;
  videoSource: string;
  age: number;
  duration: number;
  youtubeString: string;
  release: number;
  WatchLists: {
    id: string;
    userId: string;
    movieId: number | null;
  }[];
}

export type Movies = Movie[];
