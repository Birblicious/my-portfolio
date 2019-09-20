import React, { Component } from "react";
import ReactDOM from "react-dom";

//Bootstrap CSS JS & JQ
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import "./navigation/navbarstyle";

// Components
import App from "./app/app";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <div>
    <App />
  </div>,
  rootElement
);
