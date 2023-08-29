import React from "react";
import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import javascript from "../../../assets/javascript.png";
import react from "../../../assets/react.png";
import vue from "../../../assets/vue.png";
import git from "../../../assets/git.png";
import github from "../../../assets/github.png";
import node from "../../../assets/node.png";
import nextjs from "../../../assets/nextjs.png";
import postgres from "../../../assets/postgres.png";
import redux from "../../../assets/redux.png";
import tailwind from "../../../assets/tailwind.png";
import firebase from "../../../assets/firebase.svg";
import material from "../../../assets/material-ui.svg";
import postman from "../../../assets/postman.svg";
import reactnative from "../../../assets/react-native.svg";
import supabase from "../../../assets/supabase.svg";

import { Link as ScrollLink } from "react-scroll";

const Techs = () => {
  const techs = [
    {
      id: 1,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-400",
    },
    {
      id: 2,
      src: react,
      title: "React",
      style: "shadow-cyan-400",
    },
    {
      id: 3,
      src: reactnative,
      title: "React Native",
      style: "shadow-cyan-400",
    },
    {
      id: 4,
      src: vue,
      title: "Vue",
      style: "shadow-emerald-500",
    },
    {
      id: 5,
      src: redux,
      title: "Redux",
      style: "shadow-violet-700",
    },
    {
      id: 6,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-cyan-700",
    },
    {
      id: 9,
      src: material,
      title: "Material UI",
      style: "shadow-cyan-500",
    },
    {
      id: 10,
      src: node,
      title: "Node JS",
      style: "shadow-lime-400",
    },
    {
      id: 11,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 12,
      src: postgres,
      title: "PostgreSQL",
      style: "shadow-blue-400",
    },
    {
      id: 13,
      src: git,
      title: "Git",
      style: "shadow-orange-600",
    },
    {
      id: 14,
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 15,
      src: postman,
      title: "Postman",
      style: "shadow-orange-600",
    },
    {
      id: 16,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-600",
    },
    {
      id: 17,
      src: supabase,
      title: "Supabase",
      style: "shadow-emerald-700",
    },
  ];

  return (
    <section
      name="Technologies"
      className="relative w-full md:h-screen h-unset"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h2 className="text-4xl font-bold inline pb-1 border-b-4 border-sky-800 sm:text-5xl">
            Technologies
          </h2>
          <p className="py-6">Tecnologias con las que he trabajado.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 text-center py-8 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img className="w-20 mx-auto py-2 md:py-4" src={src} alt="" />
              <p className="mt-4 md:mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <ScrollLink
        to="Education"
        smooth
        duration={500}
        className="absolute bottom-[-10] -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-sky-500"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-sky-500"></i>
      </ScrollLink>
    </section>
  );
};

export default Techs;
