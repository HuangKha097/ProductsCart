import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/css/reset.css";
import "../src/css/index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
