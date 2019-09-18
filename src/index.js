import React, { Component } from "react";
import ReactDOM from "react-dom";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import App from "./app/app";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <div>
    <App />
  </div>,
  rootElement
);
