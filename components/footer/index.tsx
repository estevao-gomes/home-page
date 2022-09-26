import { LinkedinLogo, TwitterLogo } from "phosphor-react";
import { GoMarkGithub } from "react-icons/go";

export function Footer() {
  return (
    <footer className="sticky bottom-0 z-20 -mt-64 w-fit">
      <ul className="ml-2 h-fit w-fit after:mb-10 after:ml-4 after:block after:h-[100px] after:w-[2px] after:bg-brand-light">
        <li className="bg-transparent text-3xl hover:cursor-pointer hover:text-text2-light">
          <LinkedinLogo weight="bold" />
        </li>
        <li className="bg-transparent py-4 text-3xl hover:cursor-pointer hover:text-text2-light">
          <GoMarkGithub />
        </li>
        <li className="bg-transparent text-3xl hover:cursor-pointer hover:text-text2-light">
          <TwitterLogo weight="bold" />
        </li>
      </ul>
    </footer>
  );
}
