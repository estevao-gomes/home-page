import { LinkedinLogo, TwitterLogo } from "phosphor-react";
import { GoMarkGithub } from "react-icons/go";

export function Footer() {
  return (
    <footer className="sticky bottom-0 -mt-64 py-4">
      <ul className="ml-6 w-fit border-l-2 border-brand-light">
        <li className="my-6 -ml-4 bg-surface1-light">
          <LinkedinLogo size={32} weight="bold" />
        </li>
        <li className="my-6 -ml-4 bg-surface1-light py-2 text-3xl">
          <GoMarkGithub />
        </li>
        <li className="my-6 -ml-4 bg-surface1-light">
          <TwitterLogo size={32} weight="bold" />
        </li>
      </ul>
    </footer>
  );
}
