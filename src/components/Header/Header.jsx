import React from "react";
import { Link } from "gatsby";

import Logo from '../../images/pat.svg';

import '../../styles/header/header.scss';

const Header = () => (
  <nav>
      <Link to="/" className="logo">
        <img src={Logo} alt="lisandropat" />
        <div className="home">
          <div>
            Back to home
          </div>
        </div>
      </Link>
      <div className="menu">
        <Link to="/portfolio">Portfolio.</Link>
        <Link to="/about">About.</Link>
        <Link to="/contact">Contact.</Link>
      </div>
  </nav>
)

export default Header
