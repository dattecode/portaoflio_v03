import { IconMail } from "@tabler/icons-react";
import "../styles/contactCss.css";
import { AnimatePresence, motion } from "framer-motion";

const Contact = () => {
  return (
    <AnimatePresence>
      <motion.article
        className="contact-container"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Contacto
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Si tienes alguna pregunta, sugerencia o propuesta de colaboración, no
          dudes en ponerte en contacto conmigo. Estaré encantado de escucharte.
        </motion.p>
        <motion.a
          className="contact-link"
          href="mailto:dattecode@gmail.com"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <IconMail />
          <span>Contactar por correo electrónico</span>
        </motion.a>
      </motion.article>
    </AnimatePresence>
  );
};

export default Contact;
