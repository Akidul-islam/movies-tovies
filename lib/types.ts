interface Genres {
  id: number;
  name: string;
}
interface MovieList {
  title: string;
  url: string;
}
interface Movie {
  id?: number;
  original_title?: string;
  name?: string;
  first_air_date?: string;
  media_type?: string;
  poster_path?: string;
  title?: string | undefined;
  overview?: string;
  release_date?: string;
  backdrop_path?: string;
  vote_average?: number;
}

interface Thumbnails {
  title: string;
  image: string;
  release_date: string;
  vote_average: string;
  mediaType: string;
}

export type { Genres, MovieList, Movie, Thumbnails };
