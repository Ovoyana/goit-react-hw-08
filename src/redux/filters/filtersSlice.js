import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    filters: {
      name: "",
    },
  },
  selectors: {
    selectNameFilter: (state) => state.filters.name,
  },
  reducers: {
    changeFilter: (state, action) => {
        state.filters.name = action.payload;
      },
  },
});

export const filtersReducer = slice.reducer;
export const { changeFilter } = slice.actions;
export const { selectNameFilter } = slice.selectors;