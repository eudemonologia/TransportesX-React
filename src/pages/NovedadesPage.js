import React from "react";
import Articulo from "../components/common/Articulo";

const articulos = [
  {
    titulo: "Titulo 1",
    subtitulo: "Subtitulo 1",
    texto:
      "Descripción - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quo placeat rem. Similique dolores cupiditate nam eaque, quidem officiis, voluptatibus quos sed, unde repudiandae a illo doloribus placeat quis qui!",
  },
  {
    titulo: "Titulo 2",
    subtitulo: "Subtitulo 2",
    texto:
      "Descripción - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quo placeat rem. Similique dolores cupiditate nam eaque, quidem officiis, voluptatibus quos sed, unde repudiandae a illo doloribus placeat quis qui!",
  },
  {
    titulo: "Titulo 3",
    subtitulo: "Subtitulo 3",
    texto:
      "Descripción - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quo placeat rem. Similique dolores cupiditate nam eaque, quidem officiis, voluptatibus quos sed, unde repudiandae a illo doloribus placeat quis qui!",
  },
];

const NovedadesPage = (props) => {
  return (
    <main className="holder">
      <h2>Novedades</h2>
      {articulos.map((articulo, key) => (
        <Articulo key={key} {...articulo} />
      ))}
    </main>
  );
};

export default NovedadesPage;
