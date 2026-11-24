import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Foundation } from "./components/Foundation";
import { Projects } from "./components/Projects";
import { Approach } from "./components/Approach";
import { Track } from "./components/Track";
import { Markets } from "./components/Markets";
import { Innowave } from "./components/Innowave";
import { Closing } from "./components/Closing";

function App() {
  return (
    <>
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Foundation />
        <Projects />
        <Approach />
        <Track />
        <Markets />
        <Innowave />
        <Closing />
      </main>
    </>
  );
}

export default App;
