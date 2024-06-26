import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import DetailPost from "./components/DetailPost";
import { MyProvider } from "./contexts/MyContext";

ReactDOM.render(
  <React.StrictMode>
    <MyProvider>
      <DetailPost />
    </MyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
