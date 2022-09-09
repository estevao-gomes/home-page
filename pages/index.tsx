import type { NextPage } from "next";
import { Hero } from "./hero";
import { Navbar } from "./navbar";
import { Main } from "./main";
import { About } from "./about";
import { Projects } from "./projects";
import { Contact } from "./contact";

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => (
  <Main>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
  </Main>
);

export default Home;
