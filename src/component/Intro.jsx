import React from "react";
import "../styles/introCss.css";
import programmer from "../imgAgif/programmer.gif";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <article className="containerIntro">
      <motion.section
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={programmer} className="imgIntro" />
      </motion.section>
      <section className="descIntro">
        <motion.h2
          className="introTitle"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hola mi nombre es Leonardo Valenzuela, Desarrollador Front-End
        </motion.h2>
        <motion.p
          className="textIntro"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          "Soy un apasionado desarrollador front-end con un enfoque en la
          creación de interfaces de usuario atractivas y altamente funcionales.
          Mi experiencia abarca tanto el desarrollo de aplicaciones web como
          móviles, y mi destreza se extiende a diversos marcos y bibliotecas, Mi
          objetivo principal es fusionar diseño y funcionalidad para crear
          experiencias digitales cautivadoras y efectivas para los usuarios."
        </motion.p>
      </section>
    </article>
  );
};

export default Intro;
