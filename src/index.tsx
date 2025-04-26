import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // ✅ Make sure this is the correct file path

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
