import React from "react";
import { Link } from "react-router-dom";

const AllProjects = () => {
  const projects = [
    {
      id: 1,
      src: "/images/projectsImages/Agenda.png",
      demo: "https://stoic-ardinghelli-5f92b8.netlify.app/",
      code: "https://github.com/BrandGerry/AppUsers",
    },
    {
      id: 2,
      src: "/images/projectsImages/ClimaApp.png",
      demo: "https://clever-engelbart-eaa598.netlify.app/",
      code: "https://github.com/BrandGerry/Climapp",
    },
    {
      id: 3,
      src: "/images/projectsImages/ClimaApp2.png",
      demo: "https://awesome-poitras-b57b78.netlify.app/",
      code: "https://github.com/BrandGerry/Climanavegador",
    },
    {
      id: 4,
      src: "/images/projectsImages/CrudApp.png",
      demo: "https://flamboyant-kowalevski-1a3a4f.netlify.app/",
      code: "https://github.com/BrandGerry/Todolist",
    },
    {
      id: 5,
      src: "/images/projectsImages/FunkoStore.png",
      demo: "https://eager-bhabha-0608c6.netlify.app/",
      code: "https://github.com/BrandGerry/Ecomercefko",
    },
    {
      id: 6,
      src: "/images/projectsImages/Pokedex.png",
      demo: "https://flamboyant-jang-57ad28.netlify.app/",
      code: "https://github.com/BrandGerry/Pokedexmain",
    },
    {
      id: 7,
      src: "/images/projectsImages/RickYMortyApp.png",
      demo: "https://compassionate-austin-ccc623.netlify.app/",
      code: "https://github.com/BrandGerry/RickMortySearch",
    },
  ];

  const handleClickDemo = (demoUrl) => {
    const newWindow = window.open(demoUrl, "_blank");
    newWindow.opener = null;
    newWindow.rel = "noopener noreferrer";
  };

  const handleClickCode = (codeUrl) => {
    const newWindow = window.open(codeUrl, "_blank");
    newWindow.opener = null;
    newWindow.rel = "noopener noreferrer";
  };

  return (
    <section
      name="Projects"
      className="relative w-full text-white md:min-h-screen mt-24 mb-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-sky-800 sm:text-5xl">
            Projects
          </h2>
          <p className="py-6">Todas mis aplicaciones aquí.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map(({ id, src, demo, code }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto"
            >
              <img
                loading="lazy"
                src={src}
                alt="project card"
                className="rounded-md duration-200 hover:scale-105 max-h-48"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleClickDemo(demo)}
                  className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125"
                >
                  App
                </button>
                <button
                  onClick={() => handleClickCode(code)}
                  className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125"
                >
                  Código
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          to="/"
          className="text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t bg-sky-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300"
        >
          <span className="">
            <i className="bx bxs-home-smile mr-2"></i>
          </span>
          Go back
        </Link>
      </div>
    </section>
  );
};

export default AllProjects;
