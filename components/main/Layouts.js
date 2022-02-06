import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export const Layouts = (props) => {
  return (
    <>
      <Navbar />
      <main className="container z-20 mt-[4.5rem] lg:px-10">
        {props.children}
      </main>
      <Footer />
    </>
  );
};
export default Layouts;
