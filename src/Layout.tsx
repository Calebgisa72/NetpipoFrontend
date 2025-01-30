import React from "react";
import Router from "./Routes/Router";
import bgImage from "../public/ricky and mini thumbnail.png";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

const Layout = () => {
  const { viewMenuBar } = useSelector((state: RootState) => state.app);
  return (
    <div className="relative flex text-foreground-dark bg-black h-screen w-full">
      <div className="fixed brightness-[65%] w-[34rem] h-[30rem] sz:w-[55rem] sz:h-[40rem] top-10 bottom-14 left-0 right-0 sz:left-[8rem] sz:right-5 xmd:left-[35rem] xmd:right-72  xlg:left-[60rem] xlg:right-72 object-cover">
        <img src={bgImage} alt="" className="w-full h-full" />
      </div>
      {(viewMenuBar || window.innerWidth > 600) && (
        <div className="fixed h-[calc(100%-4rem)] sz:h-screen flex sz:justify-center bg-black bg-opacity-70 sz:relative top-16 sz:top-0 z-50 sz:z-0 sm:bg-opacity-0 transition-opacity duration-300 ease-out">
          <Sidebar />
        </div>
      )}
      <div className="fixed w-full sz:w-[calc(100%-11.5rem)] sz:left-[11.5rem] z-30">
        <Navbar />
      </div>
      <main className="fixed top-16 bottom-10 sz:left-[11.5rem] sz:right-10 z-40 w-full sz:w-[calc(100%-11.5rem)] h-[calc(100%-2.25rem)] flex flex-col justify-center overflow-y-auto custom-scrollbar">
        <div className="w-full h-full flex flex-col">
          <Router />
        </div>
      </main>
    </div>
  );
};

export default Layout;
