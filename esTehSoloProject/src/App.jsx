import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Landing from "./Pages/Landing";
import Menu from "./Pages/Menu";
import Manis from "./Pages/Detail/Manis";
import Kampoel from "./Pages/Detail/Kampoel";
import Tarik from "./Pages/Detail/Tarik";
import Susu from "./Pages/Detail/Susu";
import Milo from "./Pages/Detail/Milo";
import Coklat from "./Pages/Detail/Coklat";
import Blackcurrant from "./Pages/Detail/Blackcurrant";
import Matcha from "./Pages/Detail/Matcha";
import Jasmine from "./Pages/Detail/Jasmine";
import Lemon from "./Pages/Detail/Lemon";
import Lychee from "./Pages/Detail/Lychee";
import Privacy from "./Pages/Privacy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/estehmanis" element={<Manis />} />
        <Route path="/estehkampoel" element={<Kampoel />} />
        <Route path="/estehtarik" element={<Tarik />} />
        <Route path="/estehsusu" element={<Susu />} />
        <Route path="/estehmilo" element={<Milo />} />
        <Route path="/estehcoklat" element={<Coklat />} />
        <Route path="/estehblackcurrant" element={<Blackcurrant />} />
        <Route path="/estehmatcha" element={<Matcha />} />
        <Route path="/estehjasmine" element={<Jasmine />} />
        <Route path="/estehlemon" element={<Lemon />} />
        <Route path="/estehleci" element={<Lychee />} />
      </Routes>
    </Router>
  );
}

export default App;
