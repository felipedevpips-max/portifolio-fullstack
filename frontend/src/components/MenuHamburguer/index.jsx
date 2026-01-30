import { useState } from "react";
import styles from "./menuhamburguer.module.css"

export const MenuHamburguer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.hamburguer} onClick={() => setOpen(!open)}>
        <span className={open ? styles.active : ""}></span>
        <span className={open ? styles.active : ""}></span>
        <span className={open ? styles.active : ""}></span>
      </div>
      <ul className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
        <li>
          <a href="/" onClick={() => window.location.reload()}>
            Home
          </a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#integrantes">Integrantes</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </>
  );
};
