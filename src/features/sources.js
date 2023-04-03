import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  sources: [],
  errors: null,
};

export const sourcesSlice = createSlice({
  name: "sources",
  initialState: initialState,
  reducers: {
    fetchSources: (state, action) => {
      state.isLoading = true;
      //Fetch data function
      //on success and data received save it
      (state.sources = action.payload),
        //on success and data received save it
        (state.errors = null);
      state.isLoading = false;
    },
    // fetchSourcesSuccess: (state, action) => {
    //   (state.isLoading = false),
    //     (state.sources = action.payload),
    //     (state.errors = null);
    // },
    // fetchSourcesFail: (state, action) => {
    //   (state.isLoading = false), (state.errors = action.payload);
    // },
  },
});

const { fetchSources } = sourcesSlice.actions;
export default sourcesSlice.reducer;
