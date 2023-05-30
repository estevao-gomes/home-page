import { About } from "./about";
import { Hero } from "./hero";
import { Navbar } from "./navbar";
import { Tech } from "./tech";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Tech />
    </main>
  );
}
