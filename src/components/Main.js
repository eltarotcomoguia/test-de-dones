import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default Main;