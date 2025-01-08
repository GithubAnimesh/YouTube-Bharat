import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  // This slice creating for optime API call, We call api only different search
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
