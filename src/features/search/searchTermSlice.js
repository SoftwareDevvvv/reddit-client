import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the async thunk
export const fetchPostsWithQuery = createAsyncThunk(
  "searchTerm/fetchPosts",
  async (query) => {
    const response = await fetch(
      `https://www.reddit.com/search.json?q=${encodeURIComponent(query)}`
    );
    const json = await response.json();
    return json.data.children.map((post) => post.data); // Return the array of posts
  }
);

const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState: {
    searchTerm: "",
    posts: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload; // Update the search term
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsWithQuery.pending, (state) => {
        state.isLoading = true; // Set loading state
        state.hasError = false; // Clear any previous error
      })
      .addCase(fetchPostsWithQuery.fulfilled, (state, action) => {
        state.isLoading = false; // Clear loading state
        state.posts = action.payload; // Store the fetched posts
      })
      .addCase(fetchPostsWithQuery.rejected, (state, action) => {
        state.isLoading = false; // Clear loading state
        state.hasError = false; // Set error message
      });
  },
});

export const { setSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;
