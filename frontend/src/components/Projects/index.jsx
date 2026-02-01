import styles from "./projects.module.css";

import { useProjectsInfo } from "../../hooks/useProjectsInfo";

export function About() {
  const { projects, loading } = useProjectsInfo();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Projetos</h2>
        <p></p>
        <div className={styles.projects}>
          {loading && <p>Carregando...</p>}

          {!loading &&
            projects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <h3>{project.title}</h3>

                <img src={projectImages} alt={project.title} />

                <p>{project.description}</p>

                <ul>
                  {project.techs.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubButton}
                >
                  Ver no GitHub
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
