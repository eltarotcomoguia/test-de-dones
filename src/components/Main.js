import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Presentacion from './Presentacion';
import Cuestionario from "./Cuestionario";
import Resultado from "./Resultado";

function Main() {
  return (
    <Router basename="/test-de-dones">
      <Routes>
        <Route path="/" element={<Presentacion />} />
        <Route path="/cuestionario" element={<Cuestionario />} />
        <Route path="/resultado" element={<Resultado />} />
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default Main;