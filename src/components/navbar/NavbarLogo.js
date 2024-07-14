import React from "react";
import styles from "../../App.module.css";
import logo from "../../images/Reddit-logo.png";
export default function NavbarLogo() {
  return (
    <div className={styles.navbarLeft}>
      <img src={logo} alt="logo" />
      <p>Reddit</p>
    </div>
  );
}
