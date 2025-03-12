import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserState from "./context/userData/UserState"; // Import UserState

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserState>
      {" "}
      {/* Wrap App inside UserState */}
      <App />
    </UserState>
  </React.StrictMode>
);

reportWebVitals();
