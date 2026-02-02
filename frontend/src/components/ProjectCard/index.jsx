import styles from "./projectcard.module.css";
import { projectImages } from "../../constants/projectImages";

export function ProjectCard({ project }) {
  if (!project) return null;

  const image =
    project.contacts?.length > 0
      ? projectImages[project.contacts[0].type]
      : null;

  return (
    <div className={styles.card}>
      <h3>{project.title}</h3>

      {image && <img src={image} alt={project.title} />}

      <p>{project.description}</p>

      <ul>
        {project.techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver no GitHub
      </a>
    </div>
  );
}
