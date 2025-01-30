import React from "react";
import Layout from "./Layout";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Layout />
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
