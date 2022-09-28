import { ReactElement } from "react";

interface ListItemProps {
  content: string;
}

function ListItem({ content }: ListItemProps) {
  return (
    <li className="bg-surface2-light p-1 shadow transition-all ease-in hover:cursor-pointer hover:text-text2-light hover:shadow-lg">
      <a href="#home" className="hover:opacity-80">
        {content}
      </a>
    </li>
  );
}

export function Navbar() {
  const navItems: string[] = [
    "home",
    "About Me",
    "Tech Stack",
    "Projects",
    "Contact",
  ];
  function generateKey(pre: string) {
    return `${pre}_${new Date().getTime()}`;
  }
  // The borders are to be removed on production
  return (
    <nav className="sticky top-0 z-20 -mt-14 w-full bg-brand-light font-bold opacity-90">
      <ul className="flex list-none justify-end gap-4 py-4 pr-4 font-sans text-text1-light">
        {navItems.map((item, index) => (
          <ListItem
            content={item}
            key={generateKey(`NavLi_${index.toString()}`)}
          />
        ))}
      </ul>
    </nav>
  ) as ReactElement;
}
