import React from "react";

const Layout = ({ children, pageName }) => (
  <main className={pageName}>
    {children}
  </main>
)

export default Layout
