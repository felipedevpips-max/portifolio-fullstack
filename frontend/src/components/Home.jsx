import Hero from "./Hero";
import { About } from "./About";
import { Techs } from "./Techs";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export default function Home() {
  return (
    <>
      <section id="inicio">
        <Hero />
      </section>

      <section id="sobre">
        <About />
      </section>

      <section id="techs">
        <Techs />
      </section>

      <section id="projetos">
        <Projects />
      </section>

      <section id="contato">
        <Contact />
      </section>
    </>
  );
}
