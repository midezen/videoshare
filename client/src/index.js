import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToggleContextProvider } from "./utils/toggleContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToggleContextProvider>
      <App />
    </ToggleContextProvider>
  </React.StrictMode>
);
