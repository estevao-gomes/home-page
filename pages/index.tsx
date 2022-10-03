import type { NextPage } from "next";
import Head from "next/head";

import { Main, Navbar, Hero, About, Projects, Contact } from "../components";
import { Footer } from "../components/footer";
import { Stack } from "../components/stack";

// allows for ESLint to ignore error for NextJS Page setup
// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => (
  <>
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <title>Estevão Gomes</title>
    </Head>
    <Main>
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </Main>
  </>
);

export default Home;
