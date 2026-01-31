import { useEffect, useRef } from "react";
import styles from "./hero.module.css";
import { useProfileInfo } from "../../hooks/useProfileInfo";
import avatar from "../../assets/avatar.png";
import { Button } from "../Button";
import { ButtonProjects } from "../ButtonProjects";

export default function Hero() {
  const heroRef = useRef(null);
  const { profile, loading } = useProfileInfo();

  useEffect(() => {
    const effect = window.VANTA.CELLS({
      el: heroRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      color1: 0x000000,
      color2: 0x6135f2,
      size: 0.2,
      speed: 1.2,
    });

    return () => effect?.destroy();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.techs}>
            <h1>{loading ? "Carregando..." : profile.name}</h1>
            <h2>{loading ? "Carregando..." : profile.role}</h2>
            <p>{loading ? "Carregando..." : profile.techs.join(" • ")}</p>
          </div>

          <div className={styles.actions}>
            <ButtonProjects>Ver Projetos</ButtonProjects>
            <Button>Baixar CV</Button>
          </div>
        </div>

        <div className={styles.img}>
          <img src={avatar} alt="Foto de perfil" className={styles.avatar} />
        </div>
      </div>
    </section>
  );
}
