import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Reducer } from 'redux';
import { RESET_STATE_ACTION_TYPE } from './actions/resetState';
import moviesApi from './api/moviesApi';
import { movieSlice } from './features/movieSlice';

const reducers = {
  [movieSlice.name]: movieSlice.reducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
};

const combinedReducer = combineReducers(reducers);

export const rootReducer: Reducer<RootState> = (state, action) => {
  // reset user state after logout
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = {} as RootState;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
