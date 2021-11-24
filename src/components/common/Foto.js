import React from "react";
import "../../styles/common/Foto.css";

function Foto({ url, alt }) {
  return (
    <figure className="foto">
      <img src={url} alt={alt} />
    </figure>
  );
}

export default Foto;
