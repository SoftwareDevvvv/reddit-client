import { createSlice } from "@reduxjs/toolkit";

const selectedSubredditSlice = createSlice({
  name: "selectedSubreddit",
  initialState: "", // Ensure this is set correctly
  reducers: {
    setSelectedSubreddit: (state, action) => {
      return action.payload; // This should correctly return the new state
    },
  },
});

export const { setSelectedSubreddit } = selectedSubredditSlice.actions;
export default selectedSubredditSlice.reducer;
