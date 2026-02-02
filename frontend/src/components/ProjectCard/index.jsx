import styles from "./projectcard.module.css";

export function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <div className={styles.card}>
      <h3>{project.title}</h3>

      {project.image && (
        <img src={`/projectImages/${project.image}`} alt={project.title} />
      )}

      <p>{project.description}</p>

      <ul>
        {project.techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <a href={project.github} target="_blank" rel="noopener noreferrer">
        Ver no GitHub
      </a>
    </div>
  );
}
