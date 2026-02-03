import { About } from "./components/About";

import { Header } from "./components/Header";
import Hero from "./components/Hero";
import { Projects } from "./components/Projects";
import { Techs } from "./components/Techs";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About></About>
      <Techs/>
      <Projects />

    </>
  );
} 

export default App;
