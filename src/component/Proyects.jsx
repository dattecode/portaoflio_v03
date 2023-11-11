import "../styles/proyectsCss.css";
import pokedex from "../proyectImg/pokeImg.png";
import clima from "../proyectImg/climaImg.png";
import rym from "../proyectImg/rymImg.png";
import pnlu from "../proyectImg/upImg.png";
import { motion } from "framer-motion";

const Proyects = () => {
  //logic

  const proyects = [
    {
      name: "Pokedex",
      description:
        "pagina para buscar tus pokemons favoritos y ver sus estadisticas",
      url: "https://rad-cucurucho-74df0c.netlify.app",
      img: pokedex,
      git: "https://github.com/dattecode/pokedex_v02",
    },
    {
      name: "Metereologo",
      description: "Web Para ver la condicion climatica en tu ubicacion,",
      url: "https://graceful-meringue-f189ce.netlify.app",
      img: clima,
      git: "https://github.com/dattecode/weather_v02",
    },
    {
      name: "Rick Y Morty",
      description:
        "Ve tus personajes favoritos segun su locacion y revisa si estan vivos o muertos",
      url: "https://glistening-figolla-8faff5.netlify.app",
      img: rym,
      git: "https://github.com/dattecode/RYM_V02",
    },
    {
      name: "Panel de usuarios",
      description:
        "genera edita tus usuarios la pagina esta conectada a una api usando las propiedades de https",
      url: "https://lucky-maamoul-58474b.netlify.app",
      img: pnlu,
      git: "https://github.com/dattecode/userPanelV02",
    },
  ];

  return (
    <article className="proyects-container">
      {proyects.map((proyect, i) => (
        <motion.section 
        key={i} className="proyect"
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.5}}
        >
          <div className="proyect-image">
            <img src={proyect.img} alt={proyect.name} />
          </div>
          <div className="proyect-details">
            <h2>{proyect.name}</h2>
            <p>{proyect.description}</p>
            <div className="proyect-links">
              <a href={proyect.url} target="_blank" rel="noopener noreferrer">
                Ver proyecto
              </a>
              <a href={proyect.git} target="_blank" rel="noopener noreferrer">
                Repositorio en GitHub
              </a>
            </div>
          </div>
        </motion.section>
      ))}
    </article>
  );
};

export default Proyects;
