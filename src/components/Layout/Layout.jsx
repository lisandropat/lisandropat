import React from "react";
import AnimatedCursor from "react-animated-cursor";

import '../../styles/index.scss';

// TODO: Re-do https://github.com/stephenscaff/react-animated-cursor component in order to include a border around the solid cursor.
// TODO: Skew scroll with https://brad-carter.medium.com/how-to-add-smooth-skew-scrolling-in-react-dd0eddbc24a1

const Layout = ({ children, pageName, cursorColor }) => (
  <main id={pageName}>
    {children}
    <AnimatedCursor
      innerSize={10}
      outerSize={8}
      color={cursorColor}
      outerAlpha={0.2}
      innerScale={0.5}
      outerScale={8}
    />
  </main>
)

export default Layout
