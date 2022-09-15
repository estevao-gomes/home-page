import { ReactElement } from "react";

export function Navbar() {
  return (
    <nav className="sticky top-0 -mt-7 w-full border-2 border-red-500 bg-gray-300 opacity-80">
      <ul className="flex list-none justify-end gap-4 pr-4">
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
