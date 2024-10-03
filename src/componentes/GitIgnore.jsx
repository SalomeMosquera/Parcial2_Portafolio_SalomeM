// src/components/GitIgnore.js
import React from "react";

function GitIgnore() {
  return (
    <main>
      <div className="container-gitIgnore">
        <h1>PASO A PASO PARA UTILIZAR GIT IGNORE</h1>
        <p className="parrafo-descriptivo">
          El archivo ".gitignore"se utiliza para decirle a Git qué archivos o
          directorios deben ser ignorados...
        </p>

        <div className="contenido-gitIgnore">
          <div className="pasos-gitIgnore">
            <img
              className="imagen-gitIgnore"
              src="./assets/1Rojo.png"
              alt="Icono habilidades blandas"
            />
            <h3>PASO 1</h3>

            <p>
              Para empezar, ve a la raíz de tu proyecto, donde se encuentra la
              carpeta .git, y crea un nuevo archivo llamado <b>".gitignore"</b>.
              <ul>
                <li>
                  Desde la terminal, puedes ejecutar el comando "touch
                  .gitignore".
                </li>
                <br />
                <li>
                  O desde un editor de texto, simplemente creando un nuevo
                  archivo llamado <b>".gitignore"</b>.
                </li>
              </ul>
            </p>
          </div>

          <div className="pasos-gitIgnore">
            <img
              className="imagen-gitIgnore"
              src="./assets/2Blanco.png"
              alt="Icono habilidades blandas"
            />
            <h3>PASO 2</h3>
            <p>
              Abre el archivo <b>".gitignore"</b> en un editor de texto y
              escribe el nombres de los archivos que deseas que Git ignore.
            </p>
            <p>
              Por ejemplo:
              <ul>
                <li>
                  Para ignorar los archivos con extensión .log, puedes añadir{" "}
                  <b>*.log</b>.
                </li>
                <li>
                  {" "}
                  Para ignorar carpetas completas escribe nombre_de_carpeta/
                </li>
                <li>
                  Para archivos específicos escribe <b>notas.txt`</b>.
                </li>
              </ul>
            </p>
          </div>

          <div className="pasos-gitIgnore">
            <img
              className="imagen-gitIgnore"
              src="./assets/3Blanco.png"
              alt="Icono habilidades blandas"
            />
            <h3>PASO 3</h3>
            <p>
              Guarda los cambios en el archivo <b>".gitignore"</b>. <br />
              <br />
              Luego, usa el comando git status para verificar que los archivos o
              directorios especificados no aparezcan en la lista de cambios
              pendientes, lo que confirmará que están siendo ignorados
              correctamente.
            </p>
          </div>

          <div className="pasos-gitIgnore">
            <img
              className="imagen-gitIgnore"
              src="./assets/4Rojo.png"
              alt="Icono habilidades blandas"
            />
            <h3>PASO 4</h3>
            <p>
              Finalmente, añade el archivo <b>".gitignore"</b> a tu repositorio
              ejecutando "git add .gitignore". <br />
              <br />
              Realiza un commit para guardar los cambios, usando el comando "git
              commit -m 'Añadir archivo .gitignore'".
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default GitIgnore;
