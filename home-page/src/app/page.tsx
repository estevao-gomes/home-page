import { About } from "./about";
import { Hero } from "./hero";
import { Navbar } from "./navbar";
import { Projects } from "./projects";
import { Tech } from "./tech";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Tech />
    </main>
  );
}
