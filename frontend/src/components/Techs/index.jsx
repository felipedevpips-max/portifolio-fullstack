import styles from "./techs.module.css";

import { useTechsInfo } from "../../hooks/useTechsInfo";

export function Techs() {
  const { techs, loading } = useTechsInfo();

  if (loading) return <p>Carregando tecnologias...</p>;


  return (
     <section className={styles.section} id="techs">
      <div className={styles.container}>
        <h2 className={styles.title}>Tecnologias</h2>
        <span className={styles.subtitle}>
          Tecnologias que domino e utilizo em meus projetos
        </span>

        <div className={styles.grid}>
          {techs.map((tech) => (
            <div key={tech.id} className={styles.card}>
              <img
                src={`/techs/${tech.icon}`}
                alt={tech.name}
                className={styles.icon}
              />

              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
