import React from "react";
import Layout from "./Layout";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Layout />
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </BrowserRouter>
  );
};

export default App;
