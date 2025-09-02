import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/navbar/NavBar";
import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
