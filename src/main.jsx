import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { MbrQuizProvider } from "./context/mbrquiz.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MbrQuizProvider>
            <App />
        </MbrQuizProvider>
    </React.StrictMode>
);
