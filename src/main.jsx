import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./css/global.css";
import { AuthProvider } from "./context/AuthContext";
import { QuizProvider } from "./context/QuizContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QuizProvider>
        <App />
      </QuizProvider>
    </AuthProvider>
  </React.StrictMode>
);