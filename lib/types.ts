interface Genres {
  id: number;
  name: string;
}
interface MovieList {
  title: string;
  endpoint: string;
}
interface Movie {
  id?: number;
  original_title?: string;
  poster_path?: string;
  title?: string;
  overview?: string;
  release_date?: string;
  backdrop_path?: string;
}

export type { Genres, MovieList, Movie };
