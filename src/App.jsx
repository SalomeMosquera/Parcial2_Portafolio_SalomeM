import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import Home from "./componentes/Home";
// import Habilidades from "./componentes/Habilidades";
import Projects from "./componentes/Projects.jsx";
import GitIgnore from "./componentes/GitIgnore.jsx";
import "/src/App.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="contenedor-general">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/git-ignore" element={<GitIgnore />} />
          </Routes>
        </div>

        <footer>
          <p>
            @ Desarrollo de Experciencias Multimedia Web - Universidad Autónoma
            de Occidente, 2024
          </p>
        </footer>
      </Router>
    </>
  );
}

export default App;
