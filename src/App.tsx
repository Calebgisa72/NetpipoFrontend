import React from "react";
import Layout from "./Layout";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Layout />
            <Toaster position="top-right" reverseOrder={false} />
          </div>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
