import { ReactElement } from "react";

export function Navbar() {
  // The border are to be removed on production
  return (
    <nav className="sticky top-0 -mt-16 w-full border-2 border-red-500 bg-brandLight opacity-80">
      <ul className="flex list-none justify-end gap-4 py-4 pr-4 font-sans text-text1Light">
        <li>
          <a href="#home" className="hover:opacity-80">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:opacity-80">
            About Me
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:opacity-80">
            My Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:opacity-80">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  ) as ReactElement;
}
