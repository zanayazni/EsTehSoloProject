import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Landing from "./Pages/Landing";
import Menu from "./Pages/Menu";
import Manis from "./Pages/Detail/Manis";
import Kampoel from "./Pages/Detail/Kampoel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/estehmanis" element={<Manis />} />
        <Route path="/estehkampoel" element={<Kampoel />} />
      </Routes>
    </Router>
  );
}

export default App;
