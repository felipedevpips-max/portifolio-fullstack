import { useEffect, useState } from "react";
import api from "../../services/api";
import styles from "./header.module.css";
import { socialIcons } from "../../constants/socialIcons";
import { MenuHamburguer } from "../MenuHamburguer";



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
          <a href="#inicio">Início</a>
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

        

       <nav className={styles.contact}>
          {profile?.contacts?.map(contact => (
            <a
              key={contact.id}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={socialIcons[contact.type]}
                alt={contact.type}
              />
            </a>
          ))}
        </nav>


        <MenuHamburguer/>

      </div>
    </header>
  );
}
