import axios from "axios";
// env data
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const IMG_BASE_URL = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN;

// TMDB ENDPOINT

//
const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

const apiEndpoint = {
  getMovieVideo: async (movie_id: number) => {
    const { data } = await API.get(`${BASE_URL}/movie/${movie_id}/videos`);
    const trailer = data.results.find((item: any) => item.type == "Trailer");
    return trailer;
  },
  getTv: async () => {
    const { data } = await API.get(
      `${BASE_URL}/tv/airing_today?language=en-US&page=1`
    );
    return data;
  },
  mediaTypeDetails: async (id: string, mediaType: string) => {
    const res = await API.get(`${BASE_URL}/${mediaType}/${id}`);
    return res.data;
  },
  additionlDetails: async ({
    mediaType,
    id,
    keyword,
  }: {
    mediaType: string;
    id: string;
    keyword: string;
  }) => {
    const res = await API.get(`${mediaType}/${id}/${keyword}`);
    return res.data;
  },
};

const randomMovie = async () => {
  const {
    data: { results },
  } = await API.get(`${BASE_URL}/movie/now_playing`);
  // let index =Math.floor(Math.random() * results.length)
  // setInterval(() => { index = Math.floor(Math.random() * results.length) }, 2000)
  return results;
};

export {
  randomMovie,
  IMG_BASE_URL,
  BASE_URL,
  ACCESS_TOKEN,
  API_KEY,
  apiEndpoint,
};
