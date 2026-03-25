import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div
      className="min-h-screen w-full"
      style={{ fontFamily: "'Inter', sans-serif", background: "#08080f" }}
    >
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}
