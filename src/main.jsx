import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import Akademy from "./Akademy.jsx";
import AccessCode from "./AccessCode.jsx";

// Pages cours (temporaires pour test)
const CoursDeb = () => <div className="p-10">🎓 Cours Débutant</div>;
const CoursMed = () => <div className="p-10">🔥 Cours Medium</div>;
const CoursPro = () => <div className="p-10">🚀 Cours Pro</div>;

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/akademy" element={<Akademy />} />
      <Route path="/access-code" element={<AccessCode />} />
      <Route path="/cours/deb" element={<CoursDeb />} />
      <Route path="/cours/med" element={<CoursMed />} />
      <Route path="/cours/pro" element={<CoursPro />} />
    </Routes>
  </BrowserRouter>
);
