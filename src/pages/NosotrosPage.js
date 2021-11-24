import React from "react";
import CardVertical from "../components/common/CardVertical";
import "../styles/components/pages/NosotrosPage.css";

const nosotros = [
  {
    urlimg: "images/nosotros/nosotros1.jpg",
    titulo: "Juan Gomez",
    subtitulo: "Gerente General",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloribus odio dicta earum quam sequi quae facilis iusto itaque cum voluptatibus, soluta reprehenderit necessitatibus commodi fugiat hic laboriosam voluptates quidem.",
  },
  {
    urlimg: "images/nosotros/nosotros2.jpg",
    titulo: "Diana Reyes",
    subtitulo: "Gerente Comercial",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita dolore voluptate qui quae nemo tenetur libero doloribus, repellat, odit inventore! A numquam modi voluptas, nisi tempore similique perspiciatis blanditiis!",
  },
  {
    urlimg: "images/nosotros/nosotros3.jpg",
    titulo: "Roberto Zaptos",
    subtitulo: "Gerente de Sistemas",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ad consectetur ipsum impedit dolorem ex minima fuga dolore distinctio atque similique quis facere ut laboriosam libero tempora, harum saepe iure!",
  },
  {
    urlimg: "images/nosotros/nosotros4.jpg",
    titulo: "Sandra Mastropiero",
    subtitulo: "Gerente de Marketing",
    texto:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eligendi incidunt, corrupti molestias facere libero dolor veritatis aut praesentium mollitia, odio iste ea, saepe nulla minus cumque suscipit deserunt possimus.",
  },
  {
    urlimg: "images/nosotros/nosotros5.jpg",
    titulo: "Luciano Figuero",
    subtitulo: "Gerente Logística",
    texto:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt earum unde ipsum quasi saepe eius molestiae consectetur obcaecati aperiam molestias, debitis quas reprehenderit soluta ex dolor quam voluptatibus, aliquam dolorem.",
  },
];

const NosotrosPage = (props) => {
  return (
    <main className="holder">
      <section className="historia">
        <h2>Historia</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
          deleniti, vel illo ex corrupti ea reiciendis odio quisquam sunt magnam
          doloremque hic eligendi quasi fuga suscipit aut placeat reprehenderit
          quos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error
          deleniti omnis fugiat ea a commodi deserunt. Eius dignissimos dicta,
          dolor placeat tenetur, molestias fuga maiores quam magnam, et dolores.
        </p>
      </section>
      <section className="staff">
        <h2>Staff</h2>
        <div className="personas">
          {nosotros.map((persona, key) => (
            <CardVertical
              key={key}
              urlimg={persona.urlimg}
              titulo={persona.titulo}
              subtitulo={persona.subtitulo}
              texto={persona.texto}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default NosotrosPage;
