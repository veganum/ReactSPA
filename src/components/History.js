import React from "react";

import "../components/History.css";

function History(props) {
  return (
    <>
      <div class="history">
        <div class="flex-container">
          <div class="historyLeft">
            <h1 class="title">Mi historia</h1>
            <p class="text">
              Soy un Antropólogo que ha decidido dar un giro a su carrera,
              orientándome hacia el sector de las TIC y el desarrollo de
              aplicaciones.
            </p>
          </div>
          <div class="historyRight">
            <img className="img" alt="mi imagen" src="images/fotoJose.jpg" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default History;
