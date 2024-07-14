import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../posts/postsSlice"; // Ensure this is the correct path
import styles from "../../../App.module.css"; // Adjust the styles as needed
import Posts from "../posts/Posts";

export default function SubredditPage() {
  const dispatch = useDispatch();
  const { subredditName } = useParams();
  const { posts, isLoading, hasError } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts(subredditName));
  }, [dispatch, subredditName]);

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (hasError) {
    return <p>Error occurred while fetching posts.</p>;
  }

  if (!posts || posts.length === 0) {
    return <p>No posts available in this subreddit.</p>;
  }

  return (
    <div className={styles.subredditPage}>
      <Posts posts={posts} subredditName={subredditName}></Posts>
    </div>
  );
}
