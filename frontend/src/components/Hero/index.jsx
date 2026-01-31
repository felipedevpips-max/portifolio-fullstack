import { useEffect, useRef } from "react";
import styles from "./hero.module.css";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const effect = window.VANTA.TOPOLOGY({
      el: heroRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      color: 0x3d0f93,
      backgroundColor: 0x080022
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <h1>Meu Hero</h1>
    </section>
  );
}
