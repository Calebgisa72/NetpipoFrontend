import React from "react";
import { Route, Routes } from "react-router-dom";
import PageTitle from "../Pages/PageTitle";
import NotFound from "./NotFound";
import ComingSoon from "../Pages/ComingSoon";
import Browser from "../Pages/Browser";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <>
            <PageTitle title="Netpipo Movies" />
            <ComingSoon page="Home" />
          </>
        }
      ></Route>
      <Route
        path="/"
        element={
          <>
            <PageTitle title="Rick and Morty" />
            <Browser />
          </>
        }
      ></Route>
      <Route
        path="/*"
        element={
          <>
            <NotFound />
          </>
        }
      ></Route>
    </Routes>
  );
};

export default Router;
