import { LinkedinLogo, TwitterLogo } from "phosphor-react";
import { GoMarkGithub } from "react-icons/go";

export function Footer() {
  return (
    <footer className="sticky bottom-0 z-20 -mt-64 w-fit">
      <ul className="ml-2 h-fit w-fit md:after:ml-4 md:after:block md:after:h-[100px] md:after:w-[2px] md:after:bg-brand-light">
        <li className="bg-transparent text-2xl hover:cursor-pointer hover:text-text2-light md:text-3xl">
          <a href="https://www.linkedin.com/in/estevao-gomes-pereira/">
            <LinkedinLogo weight="bold" />
          </a>
        </li>
        <li className="bg-transparent py-4 text-2xl hover:cursor-pointer hover:text-text2-light md:text-3xl">
          <a href="https://github.com/estevao-gomes">
            <GoMarkGithub />
          </a>
        </li>
        <li className="bg-transparent text-2xl hover:cursor-pointer hover:text-text2-light md:text-3xl">
          <a href="https://twitter.com/estevaogomes2">
            <TwitterLogo weight="bold" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
