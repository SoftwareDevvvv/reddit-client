import React from "react";
import styles from "../../../App.module.css";
import { Link } from "react-router-dom";

export default function Subreddit({ subreddit, onClick }) {
  return (
    <div className={styles.subreddit} onClick={onClick}>
      <Link to={`/${subreddit.display_name}`}>
        <div className={styles.row}>
          <img src={subreddit.icon_img} alt="subreddit logo" />
          <p>{subreddit.display_name}</p>
        </div>
      </Link>
      {/* Display subreddit name */}
    </div>
  );
}
