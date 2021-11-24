import React from "react";
import "../../styles/components/layout/Footer.css";

const Footer = (props) => {
  return (
    <footer>
      Diseñado por Flavia Ursino y maqueteado por{" "}
      <a href="https://www.linkedin.com/in/cristiangongora/">
        Cristian Diego Góngora Pabón
      </a>
      <br /> para la{" "}
      <a href="https://sceu.frba.utn.edu.ar/e-learning/detalle/diplomatura/1969/diplomatura-en-programacion-web-full-stack-con-react-js">
        Diplomatura en programación web full stack con React JS
      </a>{" "}
      - &copy;2021
    </footer>
  );
};

export default Footer;
