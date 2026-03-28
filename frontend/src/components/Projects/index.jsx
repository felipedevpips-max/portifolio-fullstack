import styles from "./projects.module.css";
import { ProjectCard } from "../ProjectCard";
import { useProjectsInfo } from "../../hooks/useProjectsInfo";

export function Projects() {
  const { projects, loading } = useProjectsInfo("/projects");

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Meus Projetos</h2>

        <div className={styles.projects}>
          {loading && <p>Carregando...</p>}

          {!loading &&
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}
