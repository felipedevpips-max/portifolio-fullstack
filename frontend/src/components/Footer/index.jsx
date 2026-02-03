import styles from "./footer.module.css";
import { useProfileInfo } from "../../hooks/useProfileInfo";
import { socialIcons } from "../../constants/socialIcons";

export function Footer() {
  const { profile, loading } = useProfileInfo();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
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
      </div>

      <div className={styles.copy}>
        © {new Date().getFullYear()} {loading ? "Carregando..." : profile?.name}
        . Todos os direitos reservados.
      </div>
    </footer>
  );
}
