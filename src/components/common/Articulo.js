import React from "react";
import "../../styles/common/Articulo.css";

function Articulo({ titulo, subtitulo, texto }) {
  return (
    <article className="article">
      <h3>{titulo}</h3>
      <h4>{subtitulo}</h4>
      <p>{texto}</p>
      <hr />
    </article>
  );
}

export default Articulo;
