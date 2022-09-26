import { ReactElement } from "react";

export function Navbar() {
  // The border are to be removed on production
  return (
    <nav className="sticky top-0 z-20 -mt-14 w-full bg-brand-light font-bold">
      <ul className="flex list-none justify-end gap-4 py-4 pr-4 font-sans text-text1-light">
        <li className="bg-surface2-light p-1 shadow transition-all duration-300 hover:cursor-pointer hover:text-text2-light hover:shadow-lg">
          <a href="#home" className="hover:opacity-80">
            Home
          </a>
        </li>
        <li className="bg-surface2-light p-1 shadow transition-all duration-300 hover:cursor-pointer hover:text-text2-light hover:shadow-lg">
          <a href="#about" className="hover:opacity-80">
            About Me
          </a>
        </li>
        <li className="bg-surface2-light p-1 shadow transition-all duration-300 hover:cursor-pointer hover:text-text2-light hover:shadow-lg">
          <a href="#stack" className="hover:opacity-80">
            Tech Stack
          </a>
        </li>
        <li className="bg-surface2-light p-1 shadow transition-all duration-300 hover:cursor-pointer hover:text-text2-light hover:shadow-lg">
          <a href="#projects" className="hover:opacity-80">
            My Projects
          </a>
        </li>
        <li className="bg-surface2-light p-1 shadow transition-all duration-300 hover:cursor-pointer hover:text-text2-light hover:shadow-lg">
          <a href="#contact" className="hover:opacity-80">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  ) as ReactElement;
}
