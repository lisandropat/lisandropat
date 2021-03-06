import React from "react";
import { Link } from "gatsby";

const Menu = () => (
    <>
        <Link to="/portfolio" activeClassName="active">Portfolio.</Link>
        <Link to="/about" activeClassName="active">About.</Link>
        <Link to="/contact" activeClassName="active">Contact.</Link>
    </>
)

export default Menu