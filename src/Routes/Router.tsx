import React from "react";
import { Route, Routes } from "react-router-dom";
import PageTitle from "../Pages/PageTitle";
import NotFound from "./NotFound";
import ComingSoon from "../Pages/ComingSoon";

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
