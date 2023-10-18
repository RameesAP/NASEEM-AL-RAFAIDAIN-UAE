import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <main>
 
          <Nav />
          {children}
          <Footer />
     
    </main>
  );
};

export default MainLayout;
