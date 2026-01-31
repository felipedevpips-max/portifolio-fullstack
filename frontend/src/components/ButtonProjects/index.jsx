import styles from "./buttonprojects.module.css";

export function ButtonProjects({ href, children, ...props }) {
  return (
    <a href={href} className={styles.btn} {...props}>
      {children}
    </a>
  );
}
