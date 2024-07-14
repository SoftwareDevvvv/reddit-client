import React, { useState } from "react";
import styles from "../../App.module.css";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "./searchTermSlice";
import { useNavigate } from "react-router-dom";
export default function SearchBar() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleTextChange(e) {
    setText(e.target.value);
    dispatch(setSearchTerm(text));
  }

  function navigateToLink() {
    if (!text) return;
    navigate(`/search/${text}`);
  }
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      navigateToLink();
    }
  }

  return (
    <div className={styles.navbarCenter}>
      <div className={styles.searchBar}>
        <input
          className={styles.searchInput}
          placeholder="Search"
          value={text}
          onChange={handleTextChange}
          onKeyDown={handleKeyPress}
        />
        <button className={styles.searchButton} onClick={navigateToLink}>
          Search
        </button>
      </div>
    </div>
  );
}
