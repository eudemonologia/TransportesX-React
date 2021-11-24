import React from "react";
import "../styles/components/pages/HomePage.css";

const HomePage = (props) => {
  return (
    <main className="holder">
      <img src="images/home/img01.jpg" alt="Avión" />
      <section className="columnas">
        <div className="bienvenidos left">
          <h2>Bienvenidos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            molestias omnis quasi! Enim, omnis iste vitae nostrum at quo
            corrupti dolores eum, natus illum molestiae assumenda! Tenetur,
            saepe! Aliquam, asperiores.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
            autem rem? Perferendis, reprehenderit nulla laborum molestias ipsam
            officia impedit, eaque excepturi repellendus ea consequuntur atque
            repudiandae vel est voluptatibus reiciendis.
          </p>
        </div>
        <div className="testimonios right">
          <h2>Testimonios</h2>
          <blockquote>
            <p>Simplemente Excelente</p>
            <cite>Juan Perez - zapatos.com</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
