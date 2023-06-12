import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import heroImage from "@/assets/Foto.jpg";
import { Icon } from "@/components/Icon";

export function Hero() {
  return (
    <section id="home" className="relative flex h-screen">
      <div className="absolute top-[15%] aspect-square w-2/3 max-w-[300px] overflow-hidden rounded-full border-8 border-lightGreen shadow-lg sm:left-[16.67%] sm:w-1/3 sm:max-w-none">
        <Image src={heroImage} alt="Hero Image" fill priority />
      </div>
      <div className="h-full w-1/3 bg-lightGreen"></div>
      <div className="flex h-full w-2/3 items-end justify-center bg-bgGreen sm:items-center">
        <div className="sm:ml-40">
          <div className="mb-4">
            <Icon link="https://twitter.com/estevaogomes2">
              <FontAwesomeIcon
                icon={faTwitter}
                className="aspect-square w-6 text-white sm:w-9"
              />
            </Icon>
            <Icon link="https://www.linkedin.com/in/estevao-gomes-pereira/">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="aspect-square w-6 text-white sm:w-9"
              />
            </Icon>
            <Icon link="https://github.com/estevao-gomes">
              <FontAwesomeIcon
                icon={faGithub}
                className="aspect-square w-6 text-white sm:w-9"
              />
            </Icon>
          </div>
          <h1 className="mb-16 font-openSansCondensed text-2xl font-bold sm:text-3xl">
            Olá! Eu sou,
            <p className="font-openSans text-4xl text-lightGreen sm:text-6xl">
              ESTEVÃO GOMES
            </p>
            Desenvolvedor Front-End
          </h1>
        </div>
      </div>
    </section>
  );
}
