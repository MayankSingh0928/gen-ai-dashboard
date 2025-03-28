import { configureStore, createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
  name: "query",
  initialState: { input: "", history: [], results: null, loading: false, error: null },
  reducers: {
    submitQuery: (state, action) => {
      state.input = action.payload;
      state.loading = true;
      state.error = null;
    },
    querySuccess: (state, action) => {
      state.loading = false;
      state.results = action.payload;
      state.history.unshift(state.input);
    },
    queryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const { submitQuery, querySuccess, queryFailure, clearHistory } = querySlice.actions;
export const store = configureStore({ reducer: { query: querySlice.reducer } });
