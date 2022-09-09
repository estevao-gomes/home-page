import type { NextPage } from "next";
import { Hero } from "./hero";
import { Navbar } from "./navbar";
import { Main } from './main'

const Home: NextPage = () => {
  return (
    <Main>
        <Navbar />
        <Hero/>
    </Main>
    );
};

export default Home;
