import styles from "./button.module.css";

export function Button({ href, children, ...props }) {
  return (
    <a href={href} className={styles.btn} {...props}>
      {children}
    </a>
  );
}
