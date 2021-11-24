import React from "react";
import "../../styles/common/CardVertical.css";

function CardVertical({ urlimg, titulo, subtitulo, texto }) {
  return (
    <div className="cardVertical">
      <img src={urlimg} alt={titulo} />
      <h5>{titulo}</h5>
      <h6>{subtitulo}</h6>
      <p>{texto}</p>
    </div>
  );
}

export default CardVertical;
