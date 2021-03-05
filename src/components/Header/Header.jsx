import React from "react";
import { Link } from "gatsby";

import MobileHeader from './MobileHeader';
import { Menu } from '../Menu';

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
        <Menu />
      </div>
      <MobileHeader />
  </nav>
)

export default Header
