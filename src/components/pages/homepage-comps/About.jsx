import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const About = () => {
  return (
    <section
      name="About"
      className="relative w-full md:h-screen text-white h-unset"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg">
        <div className="pb-8">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-sky-800">
            About me
          </h2>
        </div>

        <p className="mb-1 py-6">
          ¡Hola y bienvenidos a mi portafolio! Soy Brandon Mercado, un
          apasionado de la ingeniería en robótica industrial con base en México.
          Mi viaje profesional me ha llevado a explorar el emocionante mundo de
          la tecnología, y en particular, a sumergirme en el campo del
          desarrollo full-stack con un enfoque especial en el front-end.
        </p>

        <p>
          Este portafolio es una ventana a mis proyectos personales y a las
          habilidades que he cultivado a lo largo del tiempo. Aquí encontrarás
          una selección de proyectos que reflejan mi capacidad para abordar
          desafíos técnicos, colaborar en equipos multidisciplinarios y llevar
          las ideas desde la concepción hasta la implementación. Te invito a
          explorar mis trabajos, si estás buscando a alguien que combine,
          desarrollo front-end y pasión por la innovación, no dudes en ponerte
          en contacto. Estoy emocionado por lo que el futuro tiene reservado y
          espero poder contribuir a proyectos emocionantes y significativos en
          el campo de la tecnología. No olvides descargar mi CV para ver mi
          experencia laboral.
        </p>
        <p className="mb-1 py-6">¡Gracias por visitar mi portafolio!</p>
      </div>

      <ScrollLink
        to="Projects"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-sky-500"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-sky-500"></i>
      </ScrollLink>
    </section>
  );
};

export default About;
