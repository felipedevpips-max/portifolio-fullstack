import { useState } from "react";
import { useContact } from "../../hooks/useContact";
import styles from "./contact.module.css";

export function Contact() {
  const { sendContact, loading, success, error } = useContact();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    sendContact({
      name,
      email,
      message,
    })
      .then(() => {
        //  Reseta o formulário após sucesso
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        // erro já tratado no hook
      });
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Contato</h2>
        <span className={styles.line}></span>

        <p className={styles.description}>
          Disponível para projetos, parcerias e oportunidades profissionais.
          Entre em contato e retornarei o mais rápido possível.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={loading}
          />

          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />

          <textarea
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            disabled={loading}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar mensagem"}
          </button>
        </form>

        {success && (
          <p className={styles.success}>
            Mensagem enviada com sucesso! Retornarei em breve.
          </p>
        )}

        {error && (
          <p className={styles.error}>
            Ocorreu um erro ao enviar sua mensagem. Tente novamente.
          </p>
        )}
      </div>
    </section>
  );
}
