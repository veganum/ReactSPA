import React from "react";

import "../components/History.css";

function History(props) {
  return (
    <>
      <div class="flex-container">
        <div class="textoContenedor">
          <h1 class="titulo">Mi historia</h1>
          <p class="texto">
            Soy un Antropólogo que ha decidido dar un giro a su carrera,
            orientándome hacia el sector de las TIC y el desarrollo de
            aplicaciones.
          </p>
        </div>
        <div class="imagenContenedor">
          <img class="imagen" alt="mi imagen" src="images/fotoJose.jpg" />
        </div>
      </div>
    </>
  );
}

export default History;
