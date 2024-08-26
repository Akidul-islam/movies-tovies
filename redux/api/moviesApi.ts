// Or from '@reduxjs/toolkit/query/react'
import { apiEndpoint } from "@/lib/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getGenre, getMovie, getMovies } from "../features/movieSlice";
import { buildQueryString } from "@/lib/utils";
// envorment variable
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// endpoint variable

const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN;
<<<<<<< HEAD
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

=======
      if (!headers.has("Authorization") && token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
>>>>>>> b2b0a71350d73e2e1698c12df20af280fdec4751
      return headers;
    },
  }),
  tagTypes: ["moviesApi"],
  endpoints: (build) => ({
    getGenres: build.query({
      query: () => `genre/movie/list?api_key=${API_KEY}`,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(getGenre(data.genres));
      },
    }),

    getGenreMovie: build.query({
      query: (q = {}) => {
        const queryString = buildQueryString(q);
        return `discover/movie?${queryString}&api_key=${API_KEY}`;
      },
    }),

    getMovies: build.query({
<<<<<<< HEAD
      query: (endpoint) => `${endpoint}?api_key=${API_KEY}`,
=======
      query: (endpoint) => {
        console.log(endpoint);
        return `${endpoint}`;
      },
>>>>>>> b2b0a71350d73e2e1698c12df20af280fdec4751
    }),

    getMovie: build.query({
      query: (movie_id) => `movie/${movie_id}?api_key=${API_KEY}`,
      transformResponse: async (response: any) => {
        const video = await apiEndpoint.getMovieVideo(response.id);
        response.video_key = video ? video.key : null;
        return response;
      },

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(getMovie(data));
      },
    }),
  }),
});
export const {
  useGetGenresQuery,
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetGenreMovieQuery,
} = moviesApi;

export default moviesApi;
