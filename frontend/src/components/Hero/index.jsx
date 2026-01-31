import { useEffect, useRef } from "react";
import styles from "./hero.module.css";
import { useProfileInfo } from "../../hooks/useProfileInfo";

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
      speed: 1.2
    });

    return () => effect?.destroy();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.content}>
        <h1>{loading ? "Carregando..." : profile.name}</h1>
        <p>{loading ? "" : profile.role}</p>
      </div>
    </section>
  );
}
