import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

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
      <Contact/>
      <Footer/>

    </>
  );
} 

export default App;
