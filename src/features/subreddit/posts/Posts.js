import React from "react";
import styles from "../../../App.module.css";

export default function Posts({ posts, subredditName, searchKeyword }) {
  return (
    <>
      <h1>
        {searchKeyword
          ? ` Search: ${searchKeyword}`
          : ` Posts from r/${subredditName}`}
      </h1>
      <ul className={styles.postsList}>
        {posts.map((post) => (
          <li key={post.id} className={styles.postItem}>
            <div className={styles.voteButtons}>
              <button className={styles.upvote}>↑</button>
              <span>{post.score}</span>
              <button className={styles.downvote}>↓</button>
            </div>
            <div className={styles.postContent}>
              <div className={styles.authorInfo}>
                <img
                  src={`https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png`}
                  alt={post.author}
                  className={styles.authorIcon}
                />
                <span>{post.author}</span>
              </div>
              <h2>{post.title}</h2>
              {post.thumbnail && post.thumbnail !== "self" && (
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className={styles.thumbnail}
                />
              )}
              <p>{post.selftext}</p>
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
