import styles from "./about.module.css";

import { useProfileInfo } from "../../hooks/useProfileInfo";

export function About() {
  const { profile, loading } = useProfileInfo();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Sobre</h2>
        <div className={styles.about}>
          {loading
            ? "Carregando..."
            : profile?.bio
                .split(". ")
                .map((paragraph, index) => <p key={index}>{paragraph}.</p>)}
        </div>
      </div>
    </section>
  );
}
