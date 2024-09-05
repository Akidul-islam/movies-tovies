interface Genres {
  id: number;
  name: string;
}
interface MovieList {
  title: string;
  url: string;
  keys?: string;
}
interface Movie {
  id?: number;
  original_title?: string;
  original_name?: string;
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
  release_date?: string;
  vote_average: number;
  mediaType: string;
}

interface Credit {
  id: number;
  cast: CastList[];
  crew: CrewList[];
}

interface CastList {
  id: number;
  name: string;
  original_name?: string;
  profile_path: string;
  cast_id?: number;
  character: string;
  known_for_department: string;
}

interface CrewList {
  id: number;
  name: string;
  profile_path: string;
  character: string;
  department: string;
}

export type {
  Genres,
  MovieList,
  Movie,
  Thumbnails,
  CastList,
  CrewList,
  Credit,
};
