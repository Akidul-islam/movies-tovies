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
  original_name?: string;
  poster_path?: string;
  title?: string | undefined;
  overview?: string;
  release_date?: string;
  backdrop_path?: string;
  vote_average?: number;
}

export type { Genres, MovieList, Movie };
