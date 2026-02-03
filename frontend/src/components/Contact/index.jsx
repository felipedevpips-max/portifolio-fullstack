import styles from "./contact.module.css";

export function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Contato</h2>
        <span className={styles.line}></span>

        <p className={styles.description}>
          Quer conversar ou propor uma oportunidade? Envie uma mensagem e eu
          retorno assim que possível.
        </p>

        <form className={styles.form}>
          <input type="text" placeholder="Seu nome" />
          <input type="email" placeholder="Seu e-mail" />
          <textarea placeholder="Mensagem"></textarea>

          <button type="submit">Enviar mensagem</button>
        </form>

        <a className={styles.whatsapp} href="#">
          Prefere WhatsApp?
        </a>
      </div>
    </section>
  );
}
