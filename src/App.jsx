import React from "react";
import Navbar from "./components/navbar/Navbar";
import Subreddits from "./features/subreddit/subreddits/Subreddits";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { fetchSubreddits } from "./features/subreddit/subreddits/subredditsSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubredditDetail from "./features/subreddit/subreddits/SubredditDetail";
import SearchPage from "./features/search/SearchPage";
function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchSubreddits())
  },[dispatch])

  return (<Router>
    <Navbar /> {/* Include the Navbar here */}
    <Routes>
  <Route path="/" element={<Subreddits />} />
  <Route path="/:subredditName" element={<SubredditDetail />} />
  <Route path="/search/:searchQuery" element={<SearchPage />} />
</Routes>
  </Router>
  );
}

export default App;
