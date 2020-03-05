import React from "react";
import ReactDOM from "react-dom";
// import configureStore from "./store";
import rootApp from './root'


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("main");
  ReactDOM.render(<rootApp/>, root);
});
