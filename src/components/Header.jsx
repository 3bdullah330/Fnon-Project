import React from "react";
import { Link } from "react-router-dom";

import fnonImage from "../imgs/fnon.svg";

const Header = () => {
  return (
    <header className="main-header">
      <section className="container">
        <Link to="/">
          <button className="header-logo">
            <img src={fnonImage} alt="fnonImage" />
          </button>
        </Link>
        <Link to="/tutorialsPage-lesson1">
          <button className="header-tutorials-page-button button">
            الدروس
          </button>
        </Link>
      </section>
    </header>
  );
};

export default Header;
