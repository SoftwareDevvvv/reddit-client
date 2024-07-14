import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from "../features/subreddit/subreddits/subredditsSlice";
import selectedSubredditReducer from "../features/subreddit/subreddits/selectedSubredditSlice";
import searchTermReducer from "../features/search/searchTermSlice";
import postsSlice from "../features/subreddit/posts/postsSlice";
export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    selectedSubreddit: selectedSubredditReducer,
    searchTerm: searchTermReducer,
    posts: postsSlice,
  },
});
