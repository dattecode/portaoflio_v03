import { IconBrandCss3, IconBrandJavascript, IconBrandReact } from "@tabler/icons-react";
import "../styles/skillCss.css"
import { motion } from "framer-motion";

const skillsData = [
  {
    icon: <IconBrandReact />,
    title: "React",
    description:
      "Desarrollo de aplicaciones web utilizando React, con experiencia en el uso de librerías como Axios, React Router, Redux Toolkit y Framer Motion. Aplicando buenas prácticas de desarrollo y estructuración de componentes para un código limpio y eficiente.",
  },
  {
    icon: <IconBrandJavascript />,
    title: "JavaScript",
    description:
      "Tengo experiencia en el uso de JavaScript para crear lógica compleja en React, incluyendo el manejo de datos, el procesamiento de eventos y la interacción con servicios web. Soy capaz de usar JavaScript para crear componentes reutilizables y eficientes en React, lo que permite crear aplicaciones web más escalables y mantenibles.",
  },
  {
    icon: <IconBrandCss3 />,
    title: "CSS",
    description:
      "Soy competente en el uso de CSS para diseñar interfaces de usuario atractivas y receptivas. Tengo experiencia en la creación de diseños flexibles y la personalización de estilos para adaptarse a las necesidades del proyecto. Además, comprendo las buenas prácticas de CSS, como la organización de reglas y la optimización del rendimiento.",
  },
];

const Skills = () => {
  return (
    <article 
    className="skills-container"
    key={Math.random()}
    >
      {skillsData.map((skill, index) => (
        <motion.section 
        key={index} 
        className="skill"
        initial={{opacity:0, y:-20}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.4}}
        >
          <div className="skill-icon">{skill.icon}</div>
          <div className="skill-details">
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
          </div>
        </motion.section>
      ))}
    </article>
  );
};

export default Skills;
