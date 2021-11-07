import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

interface BaseProps {
  children: React.ReactNode;
}

const Base: React.FC<BaseProps> = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Base;
