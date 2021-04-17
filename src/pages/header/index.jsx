import React from "react";
import { classes } from "../../utilities/build-css-class.js";
import styles from "./style.module.scss";

export const Header = ({}) => (
  <nav className={classes( styles['header-container'],"navbar navbar-expand-lg")}>
    <a className="navbar-brand" href="#">
      Attendant
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>
);
