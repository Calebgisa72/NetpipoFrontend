import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import PageTitle from "../Pages/PageTitle";
import NotFound from "./NotFound";
import ComingSoon from "../Pages/ComingSoon";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <PageTitle title="Task" />
            <ComingSoon page="Home" />
          </>
        }
      ></Route>
    </Routes>
  );
};

export default Router;
