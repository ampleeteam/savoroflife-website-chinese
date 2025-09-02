import React from "react";
import Footer from "./Footer";
import NavBar from "./navbar/NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = async ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="container mx-auto flex-1 mt-[100px] pb-[30px] min-h-[70vh]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
