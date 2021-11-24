import React from "react";
import Foto from "../components/common/Foto";
import "../styles/components/pages/GaleriaPage.css";

function GaleriaPage(props) {
  return (
    <main className="holder">
      <h2>Galeria</h2>
      <section className="galeria">
        <Foto url="images/galeria/img01.jpg" alt="img01" />
        <Foto url="images/galeria/img02.jpg" alt="img02" />
        <Foto url="images/galeria/img03.jpg" alt="img03" />
        <Foto url="images/galeria/img04.jpg" alt="img04" />
        <Foto url="images/galeria/img05.jpg" alt="img05" />
        <Foto url="images/galeria/img06.jpg" alt="img06" />
        <Foto url="images/galeria/img07.jpg" alt="img07" />
      </section>
    </main>
  );
}

export default GaleriaPage;
