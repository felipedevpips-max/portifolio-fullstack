import styles from "./header.module.css";
import { socialIcons } from "../../constants/socialIcons";
import { MenuHamburguer } from "../MenuHamburguer";
import { useProfileInfo } from "../../hooks/useProfileInfo";
import { NavLink } from "react-router-dom";

export function Header() {
  const { profile, loading } = useProfileInfo();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {loading ? "Carregando..." : profile?.name}
        </div>

        <nav className={styles.nav}>
          <NavLink to="/">Início</NavLink>
          <NavLink to="/projetos">Projetos</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>

        <nav className={styles.contact}>
          {profile?.contacts?.map((contact) => (
            <a
              key={contact.id}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={socialIcons[contact.type]} alt={contact.type} />
            </a>
          ))}
        </nav>

        <MenuHamburguer />
      </div>
    </header>
  );
}
