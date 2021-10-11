import React from "react";
import ReactDOM from "react-dom";
import ProvideAuth from "./auth/ProvideAuth";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ProvideAuth>
      <App />
    </ProvideAuth>
  </React.StrictMode>,
  document.getElementById("root")
);
