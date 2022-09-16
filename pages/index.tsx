import type { NextPage } from "next";

import { Main, Navbar, Hero, About, Projects, Contact } from "../components";
import { Footer } from "../components/footer";
import { Stack } from "../components/stack";

// allows for ESLint to ignore error for NextJS Page setup
// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => (
  <Main>
    <Navbar />
    <Hero />
    <About />
    <Stack />
    <Projects />
    <Contact />
    <Footer />
  </Main>
);

export default Home;
