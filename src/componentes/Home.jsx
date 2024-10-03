import React from "react";
import Habilidades from "./Habilidades";

function Home() {
  return (
    <section className="section-home">
      <div className="container-home">
        <div className="contenido-home">
          <h2>SALOME MOSQUERA PRIETO</h2>
          <h3>@SMP</h3>
          <p id="aboutMe">
            Soy estudiante de 6 semestre de Ingenieria Multimedia, en la
            universidad Autónoma de Occidente, apasionado por el mundo digital y
            las herramientas creativas. Me defino como una persona paciente,
            perseverante y comprometida con lo que hace, responsable en el
            cumplimiento de cada una de las tareas que me son asignadas. Mis
            intereses se centran en la edición de imagen y video, con un enfoque
            especial en técnicas como Motion Graphics, que me permiten fusionar
            creatividad y tecnología para lograr piezas visualmente atractivas.
            También me interesa el desarrollo de páginas web. Estoy siempre en
            busca de aprender cosas nuevas, especialmente en las áreas de diseño
            y edición. En mi tiempo libre, disfruto de escuchar música y ver
            series o películas, actividades que inspiran mi creatividad.
          </p>
        </div>
        <div className="imagenes-home">
          <div>
            <img
              className="foto"
              src="https://img.freepik.com/foto-gratis/retrato-nina-europea-piel-bronceada-cabello-oscuro_176420-28171.jpg"
              alt="Salome Mosquera Prieto"
              width="350px"
              height="350px"
            />

            <div className="imagenes-redes">
              <a
                href="https://www.instagram.com/salo_mosquera15?igsh=d2FpZzZlbGN4Ym1h"
                target="_blank"
                className="redes"
              >
                <i className="fa-brands fa-instagram fa-3x"></i>
              </a>

              <a
                href="https://github.com/SalomeMosquera"
                target="_blank"
                className="redes"
              >
                <i className="fa-brands fa-github fa-3x"></i>
              </a>

              <a
                href="mailto:salome.mosquera@uao.edu.co"
                target="_blank"
                className="redes"
              >
                <i className="fa-regular fa-envelope fa-3x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Habilidades />
      </div>
    </section>
  );
}

export default Home;
