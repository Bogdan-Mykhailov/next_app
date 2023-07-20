import React from 'react';
import Header from "@/components/layout/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        { children }
      </main>
    </>
  );
};

export default Layout;
