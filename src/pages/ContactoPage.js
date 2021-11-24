import React from "react";
import "../styles/components/pages/ContactoPage.css";

const ContactoPage = (props) => {
  return (
    <main className="holder formulario__main">
      <section className="columna">
        <h2>Contacto Rápido</h2>
        <form action="" method="" className="formulario">
          <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="fname" id="fname" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="emai" id="email" />
          </div>
          <div>
            <label htmlFor="tel">Teléfono:</label>
            <input type="tel" name="tel" id="tel" />
          </div>
          <div>
            <label htmlFor="comment">Comentario:</label>
            <textarea name="comment" id="comment"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
      <section className="columna">
        <h2>Otras vías de contacto</h2>
        <p>También se pueden comunicar con nosotros ...</p>
        <ul>
          <li>Teléfono: 4578-7594</li>
          <li>
            Email:{" "}
            <a href="mailto:contacto@transportesX.com.ar">
              contacto@transportesX.com.ar
            </a>
          </li>
          <li>Facebook:</li>
          <li>Twitter:</li>
          <li>Skype:</li>
        </ul>
      </section>
    </main>
  );
};

export default ContactoPage;
