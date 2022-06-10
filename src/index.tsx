import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { SWRConfig } from "swr";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import { store } from "App/store";
import App from "App/App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "assets/styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          shouldRetryOnError: false,
        }}
      >
        <App />
      </SWRConfig>
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
);
