import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import RootApp from "./root"


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("main");
  let store= configureStore();

  ReactDOM.render(<RootApp store={store}/>, root);
});
