import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Mis Proyectos</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/javaIcon.png"
              text="Proyecto en Java con Springboot"
              label="Java"
              path="/services"
            />
            <CardItem
              src="images/reactIcon.gif"
              text="Proyecto en React.js"
              label="React.js"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/nodeIcon.png"
              text="API en Node.js"
              label="Node.js"
              path="/services"
            />
            <CardItem
              src="images/DialogflowIcon.jpg"
              text="Chatbot con Dialogflow y node"
              label="Node"
              path="/products"
            />
            <CardItem
              src="images/Angular Icon.gif"
              text="Ejemplo de Aplicación CRUD en Angular "
              label="Angular"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
