import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { findIndex, union, uniq } from 'lodash';
import { MovieDetail } from '../../models';

export interface MyListState {
  movies: MovieDetail[];
}

const initialState: MyListState = {
  movies: [],
};

const myListSlice = createSlice({
  name: 'myList',
  initialState,
  reducers: {
    addToList(state, action: PayloadAction<MovieDetail>) {
      if (findIndex(state.movies, ['id', action.payload.id]) === -1)
        state.movies.push(action.payload);
    },
    clear(state) {
      state.movies = [];
    },
  },
});

// Actions
export const myListActions = myListSlice.actions;

// Reducer
const myListReducer = myListSlice.reducer;
export default myListReducer;
