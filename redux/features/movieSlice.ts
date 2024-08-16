import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useMemo } from 'react';

const movieSlice = createSlice({
  name: 'movieState',
  initialState: {
    page: 1,
    total_pages: null,
    country: '',
    genreItem: [],
    movie: {},
    movies: [],
  },
  reducers: {
    resetMovies: (state) => {
      state.movies = [];
    },
    getMovie: (state: any, action: PayloadAction<object>) => {
      state.movie = action.payload;
    },

    getMovies: (state: any, action) => {
      const { total_pages, results } = action.payload;
      state.total_pages = total_pages;
      state.movies = [...state.movies, ...results];
    },
    getGenre: (state: any, action) => {
      state.genreItem = action.payload;
    },
    loadMore: (state, action) => {
      state.page = state.page + 1;
    },
  },
});

const filterBygenre = (genres: any, name: string) => {
  return genres.find(
    (item: { name: string }) =>
      item.name.toLowerCase() == name.replace('-', ' ')
  );
};

const selectMovieState = (state: any) => state.movieState;

// memorise state
const selectGenreMovies = createSelector(
  [selectMovieState, (state, genreName) => genreName],
  ({ page, movies, country, genreItem }, genreName) => {
    const filteredMovies = filterBygenre(genreItem, genreName);
    return {
      genre: filteredMovies, // Assuming filterBygenre returns the filtered genre
      page,
      movies,
      country,
    };
  }
);

const { getMovie, resetMovies, getGenre, loadMore, getMovies } =
  movieSlice.actions;
export {
  getMovie,
  movieSlice,
  resetMovies,
  getGenre,
  loadMore,
  getMovies,
  selectGenreMovies,
  filterBygenre,
};
