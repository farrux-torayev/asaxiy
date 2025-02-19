import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import NameContextProvider from "./Components/context/index.jsx";
import "./App.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NameContextProvider>
        <App />
      </NameContextProvider>
    </BrowserRouter>
  </StrictMode>
);
