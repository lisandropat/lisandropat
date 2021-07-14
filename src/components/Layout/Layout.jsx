import React from "react";
import PageTransition from 'gatsby-plugin-page-transitions';

import '../../styles/index.scss';

// TODO: Skew scroll with https://brad-carter.medium.com/how-to-add-smooth-skew-scrolling-in-react-dd0eddbc24a1

const Layout = ({ children, pageName }) => (
  <PageTransition>
    <main id={pageName}>
      {children}
    </main>
  </PageTransition>
)

export default Layout
