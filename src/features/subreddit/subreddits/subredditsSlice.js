import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getSubreddits = async (limit = 30) => {
  const response = await fetch(
    `https://www.reddit.com/subreddits/popular.json?limit=${limit}`
  );
  const json = await response.json(); // Ensure you await this
  return json.data.children.map((subreddit) => subreddit.data); // Return the mapped data
};

const fetchSubreddits = createAsyncThunk(
  "users/fetchSubreddits",
  getSubreddits
);

const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    isLoading: false,
    hasError: false,
    subreddits: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSubreddits.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(fetchSubreddits.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.subreddits = action.payload;
    });
    builder.addCase(fetchSubreddits.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
  },
});

export { fetchSubreddits };
export default subredditsSlice.reducer;
