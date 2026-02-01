import { About } from "./components/About";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <section>
          <About></About>
        <Container>
        </Container>
      </section>
    </>
  );
}

export default App;
