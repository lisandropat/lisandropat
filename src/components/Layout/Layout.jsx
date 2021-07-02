import React from "react";

import '../../styles/index.scss';

// TODO: Skew scroll with https://brad-carter.medium.com/how-to-add-smooth-skew-scrolling-in-react-dd0eddbc24a1

const Layout = ({ children, pageName }) => (
  <main id={pageName}>
    {children}
  </main>
)

export default Layout
