import { useState } from "react";
import styles from "./menuhamburguer.module.css";

export const MenuHamburguer = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={styles.hamburguer} onClick={() => setOpen(!open)}>
        <span className={open ? styles.active : ""}></span>
        <span className={open ? styles.active : ""}></span>
        <span className={open ? styles.active : ""}></span>
      </div>

      {open && (
        <div className={styles.overlay} onClick={handleClose} />
      )}

      <ul className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
        <li>
          <a href="/#inicio" onClick={handleClose}>
            Início
          </a>
        </li>
        <li>
          <a href="/#sobre" onClick={handleClose}>
            Sobre
          </a>
        </li>
        <li>
          <a href="/#projetos" onClick={handleClose}>
            Projetos
          </a>
        </li>
        <li>
          <a href="/#contato" onClick={handleClose}>
            Contato
          </a>
        </li>
      </ul>
    </>
  );
};
