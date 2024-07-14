import React, { useEffect } from "react";
import { fetchPostsWithQuery } from "./searchTermSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Posts from "../subreddit/posts/Posts";
import styles from "../../App.module.css";
export default function SearchPage() {
  const dispatch = useDispatch();
  const { searchQuery } = useParams();
  const { posts, isLoading, hasError } = useSelector(
    (state) => state.searchTerm
  );

  useEffect(() => {
    console.log(searchQuery);
    dispatch(fetchPostsWithQuery(searchQuery));
  }, [dispatch, searchQuery]);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (hasError) {
    return <p>Error occurred</p>;
  }

  return (
    <div className={styles.subredditPage}>
      <Posts posts={posts} searchKeyword={searchQuery} />
    </div>
  );
}
