import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import Intro from "./component/Intro";
import Proyects from "./component/Proyects";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import { useState } from "react";
import circlee from "./imgAgif/circle_num.png";

function App() {
  //state
  const [compOn, setcompOn] = useState("Intro");

  //logic

  //effect

  return (
    <main className="page-main">
      <header className="mainHeader">
        <nav className="navMain">
          <ul className="navItems">
            <li
              onClick={() => setcompOn("Intro")}
              className={`page ${compOn === "Intro" ? "pageOn" : ""}`}
            >
              intro
            </li>
            <li
              onClick={() => setcompOn("Proyects")}
              className={`page ${compOn === "Proyects" ? "pageOn" : ""}`}
            >
              proyectos
            </li>
            <li
              onClick={() => setcompOn("Skills")}
              className={`page ${compOn === "Skills" ? "pageOn" : ""}`}
            >
              habilidades
            </li>
            <li
              onClick={() => setcompOn("Contact")}
              className={`page ${compOn === "Contact" ? "pageOn" : ""}`}
            >
              contacto
            </li>
          </ul>
        </nav>
      </header>
      <div className="circleCont">
        <motion.img 
        src={circlee} className="circle"
        animate={{rotate:360, }}
        transition={{duration:45, repeat:Infinity}} 
        />
      </div>
      <article className="mainArticle">
        <AnimatePresence>
          {compOn === "Intro" && <Intro key="intro" />}
          {compOn === "Proyects" && <Proyects key="proyects" />}
          {compOn === "Skills" && <Skills key="skills" />}
          {compOn === "Contact" && <Contact key="contact" />}
        </AnimatePresence>
      </article>
    </main>
  );
}

export default App;
