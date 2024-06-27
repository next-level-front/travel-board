import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import Posts from "./components/Posts";
import { MyProvider } from "./contexts/MyContext";

ReactDOM.render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
