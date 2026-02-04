import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <main>
          <Home />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
