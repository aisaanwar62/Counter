import React from "react";
import ReactDOM from "react-dom/client";
// import { Toaster } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import "./index.css";
// import Form from "./form.jsx";
// import ArrayTag from "./arrays.jsx";
import reportWebVitals from "./reportWebVitals";
// import "bootstrap/dist/css/bootstrap.css";
// import Counter from "./counter";
// import Component from "./functional/User-form";
// import Parent from "./greetings/parent.jsx";
import { Toaster } from "react-hot-toast";

import MainComponent from "./folder1/index.jsx";
import AppRoutes from "./SPA/Routes";
import Calculate from "./bmicalculate/calculate";
import ImgCarouselAccordion from "./imgcarousel&accordion";
import App from "./App.js";
// import Component from "./functionalcomponent";
// import Component from "./mount";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* 16/april/24 */}
  </React.StrictMode>
  // <React.StrictMode>
  //   <Component />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
