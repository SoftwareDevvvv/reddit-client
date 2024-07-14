import React from "react";
import styles from "../../../App.module.css";
import { useDispatch, useSelector } from "react-redux";
import Subreddit from "./Subreddit";
import { setSelectedSubreddit } from "./selectedSubredditSlice";

export default function Subreddits() {
  const dispatch = useDispatch();
  const subreddits = useSelector((state) => state.subreddits.subreddits);
  const isLoading = useSelector((state) => state.subreddits.isLoading);
  const hasError = useSelector((state) => state.subreddits.hasError);

  const handleSubredditClick = (subreddit) => {
    // Ensure that the subreddit passed here is valid
    if (subreddit && subreddit.display_name) {
      dispatch(setSelectedSubreddit(subreddit.display_name)); // Use display_name as payload
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (hasError) {
    return <p>Error Occurred</p>;
  }

  if (!subreddits || subreddits.length === 0) {
    return <p>No subreddits available.</p>;
  }

  return (
    <div className={styles.subreddits}>
      {subreddits.map((subreddit) => (
        <Subreddit
          key={subreddit.id}
          subreddit={subreddit}
          onClick={() => handleSubredditClick(subreddit)} // Pass the whole subreddit object
        />
      ))}
    </div>
  );
}
