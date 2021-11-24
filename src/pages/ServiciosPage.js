import React from "react";
import "../styles/components/pages/ServiciosPage.css";

function ServiciosPage(props) {
  return (
    <main className="holder">
      <h2>Servicios</h2>
      <div className="servicios">
        <section className="servicio">
          <img src="images/servicios/ferroviario.jpg" alt="Tren" />
          <div className="info">
            <h4>Transporte Ferroviario</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              incidunt adipisci fugiat minus quisquam corrupti laborum
              consequuntur. Possimus error nisi, sit numquam beatae doloribus
              voluptatem repudiandae molestiae dolor dolorum reprehenderit.
            </p>
          </div>
        </section>
        <section className="servicio">
          <img src="images/servicios/aereo.jpg" alt="Avión" />
          <div className="info">
            <h4>Transporte Aereo</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              porro alias enim, et quibusdam voluptates expedita!
              Exercitationem, aspernatur suscipit! Provident mollitia, explicabo
              exercitationem distinctio nulla voluptas dicta dolores numquam
              tenetur.
            </p>
          </div>
        </section>
        <section className="servicio">
          <img src="images/servicios/maritimo.jpg" alt="Barco" />
          <div className="info">
            <h4>Transporte Marítimo</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              perspiciatis, tenetur maxime necessitatibus sed minus! Quo,
              blanditiis atque dolore molestiae asperiores laborum veritatis
              unde soluta illum corporis, ipsa illo quidem.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ServiciosPage;
