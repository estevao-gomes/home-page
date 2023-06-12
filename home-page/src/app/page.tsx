import { About } from "./about";
import { Contact } from "./contact";
import { Hero } from "./hero";
import { Navbar } from "./navbar";
import { Projects } from "./projects";
import { Tech } from "./tech";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Projects />
      <Tech />
      <About />
      <Contact />
    </main>
  );
}
