import React from "react";
import "/src/App.css";

const Habilidades = () => {
  return (
    <div className="container-habilidades">
      <h1>HABILIDADES</h1>
      <div className="contenido-habilidades">
        <div className="habilidad">
          <img
            className="imagen-habilidad"
            src="./assets/Blandas.png"
            alt="Icono habilidades blandas"
          />
          <h3>BLANDAS</h3>
          <ul>
            <li>Responsabilidad</li>
            <li>Disciplina</li>
            <li>Saber escuchar</li>
            <li>Compromiso</li>
          </ul>
        </div>

        <div className="habilidad">
          <img
            className="imagen-habilidad"
            src="./assets/Duras.png"
            alt="Icono habilidades duras"
            width="5px"
            height="10px"
          />
          <h3>DURAS</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Blender</li>
            <li>After Effects</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
