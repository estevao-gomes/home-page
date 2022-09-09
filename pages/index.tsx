import type { NextPage } from "next";

import { Main, Navbar, Hero, About, Projects, Contact } from "../components";

// allows for ESLint to ignore error for NextJS Page setup
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
