import React from "react";
import styles from "../../App.module.css";
import NavbarLogo from "./NavbarLogo";
import SearchBar from "../../features/search/SearchBar";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <NavbarLogo />
      </Link>
      <SearchBar />
    </div>
  );
}
