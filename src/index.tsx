import React from "react";
import ReactDOM from "react-dom/client";
import App from "App/App";
import { store } from "App/store";
import { Provider } from "react-redux";
import "assets/styles/main.scss";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
);
