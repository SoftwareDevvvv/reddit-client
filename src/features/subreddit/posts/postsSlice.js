import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getPosts = createAsyncThunk(
  "posts/getPostsFromSubreddit",
  async (subreddit) => {
    const response = await fetch(
      `https://www.reddit.com/r/${subreddit}/hot.json`
    );
    const json = await response.json();
    console.log(json);
    return json.data.children.map((post) => post.data);
  }
);
const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.posts = action.payload;
    });
    builder.addCase(getPosts.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
  },
});

export { getPosts };
export default postSlice.reducer;
