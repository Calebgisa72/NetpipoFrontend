import React from "react";
import Router from "./Routes/Router";
import bgImage from "../public/ricky and mini thumbnail.png";

const Layout = () => {
  return (
    <div className="relative flex text-foreground-dark bg-black h-screen w-full">
      <div
        className="absolute bg-cover bg-center brightness-[63%] top-20 bottom-14 left-14 right-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <h1>Layout Page</h1>
    </div>
  );
};

export default Layout;
