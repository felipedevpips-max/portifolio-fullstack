import Hero from "./Hero";
import { About } from "./About";
import { Techs } from "./Techs";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Techs />
      <Projects />
      <Contact />
    </>
  );
}
