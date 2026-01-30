import { useEffect, useState } from "react";
import api from "../../services/api";
import styles from "./header.module.css";

export function Header() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await api.get("/profile");
        setProfile(response.data);
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
      }
    }

    loadProfile();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <div className={styles.logo}>
          {profile ? profile.name : "Carregando..."}
        </div>

        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

      </div>
    </header>
  );
}
