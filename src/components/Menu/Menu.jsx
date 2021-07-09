import React from "react";
import { Link } from "gatsby";

const Menu = () => (
    <>
        <Link to="/portfolio" activeClassName="active">Work</Link>
        <Link to="/about" activeClassName="active">About</Link>
        <a href="mailto:contact@lisandropat.com">Get in touch</a>
    </>
)

export default Menu