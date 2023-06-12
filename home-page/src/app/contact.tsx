import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { Icon } from "@/components/Icon";

export function Contact() {
  return (
    <section
      id="contato"
      className="flex min-h-[50vh] flex-col space-y-4 bg-bgGreen pb-16 pt-32"
    >
      <h2 className="text-center font-openSans text-4xl font-bold text-lightGreen sm:text-5xl">
        Get in Touch!
      </h2>
      <p className="my-16 w-5/6 self-center">
        <h3 className="mb-4 font-PTSans">
          Viu algo de interessante, tem alguma proposta de projeto, ou quer
          conversar sobre tecnologia? Fale comigo, estou sempre aberto a novas
          amizades.
        </h3>
        <h4 className="font-openSansCondensed text-3xl font-bold sm:text-4xl">
          Me encontre nas redes sociais abaixo, ou pelo meu email:
        </h4>
        <h3 className="my-8 font-openSans text-xl font-bold text-lightGreen sm:text-4xl">
          estevaog.gomes@gmail.com
        </h3>
      </p>
      <h2 className=" mt-64 text-center font-openSansCondensed text-3xl font-bold sm:text-4xl">
        Nos vemos em breve!
      </h2>
      <div className="mt-4 self-center">
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
    </section>
  );
}
