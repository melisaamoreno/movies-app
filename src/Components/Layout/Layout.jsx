import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

import React from "react";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
