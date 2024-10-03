import React from "react";

function Projects() {
  return (
    <main>
      <div className="container-proyectos">
        <h1>MIS PROYECTOS</h1>
        <p className="parrafo-descriptivo">
          Aquí podrás encontrar algunos de los proyectos en los que he
          trabajado.
        </p>
        <div className="contenido-proyectos">
          {/* <div className="proyectos"> */}
          <div className="proyecto">
            <h3>PRINCIPIOS HTML</h3>

            <a href="https://github.com/SalomeMosquera/clase2_web.git">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
                alt=""
                width="200px"
                height="200px"
              />
            </a>
          </div>

          <div className="proyecto">
            <h3>PÁGINA RESPONSIVE</h3>

            <a href="https://github.com/SalomeMosquera/Ejercicio1.git">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2696/2696459.png"
                alt=""
                width="200px"
                height="200px"
              />
            </a>
          </div>

          <div className="proyecto form">
            <h3>FORMULARIO</h3>

            <a href="https://github.com/edwinmgallego/clase-practica-css-jueves/tree/sMosquera">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1698/1698579.png"
                alt=""
                width="200px"
                height="180px"
              />
            </a>
          </div>

          <div className="proyecto">
            <h3>NÚMERO MENOR</h3>

            <a href="https://github.com/SalomeMosquera/EjercicioWeb_Clase8">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2620/2620549.png"
                alt=""
                width="200px"
                height="200px"
              />
            </a>
          </div>

          <div className="proyecto">
            <h3>CONTADOR</h3>

            <a href="https://github.com/SalomeMosquera/EjercicioContador">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1999/1999088.png"
                alt=""
                width="200px"
                height="200px"
              />
            </a>
          </div>

          <div className="proyecto">
            <h3>CARDS EN REACT</h3>

            <a href="https://github.com/SalomeMosquera/Ejercicio_React_Clase10t">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5230/5230216.png"
                alt=""
                width="200px"
                height="200px"
              />
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </main>
  );
}

export default Projects;
