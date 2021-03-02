import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className="container position-relative">
      <div className="row">
        <nav className={`w-100 navbar navbar-light ${styles.header}`}>
          <Link to={"/"} className="navbar-brand">
            Marvel
          </Link>
          <div className={styles.hamburguer}>
            <div className={`${styles.lines} ${styles.line_top}`}></div>
            <div className={`${styles.lines} ${styles.line_mid}`}></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
