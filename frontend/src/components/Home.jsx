import Hero from "./Hero";
import { About } from "./About";
import { Techs } from "./Techs";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();
  return (
    <>
      <section id="inicio">
        <Hero />
      </section>

      <section id="sobre" className="reveal">
        <About />
      </section>

      <section id="techs" className="reveal">
        <Techs />
      </section>

      <section id="projetos" className="reveal">
        <Projects />
      </section>

      <section id="contato" className="reveal">
        <Contact />
      </section>
    </>
  );
}

