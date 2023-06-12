"use client";
import { useState } from "react";
import { Button } from "@/components/Button";

export function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <nav className="fixed z-10 flex w-full bg-bgGreen">
      <div className="flex w-1/3 bg-lightGreen py-2">
        <h1 className="ml-8 self-center text-2xl font-bold text-white">EG</h1>
      </div>
      <div className="fixed right-0 top-0 flex h-fit w-min flex-col items-end bg-bgGreen py-2 pr-2 sm:static sm:w-2/3 sm:flex-row">
        <button
          onClick={() => {
            setMenuClicked((oldMenu) => !oldMenu);
          }}
          className="my-1 rounded-2xl bg-lightGreen px-2 py-1 font-openSans text-xl font-bold text-white hover:bg-darkGreen focus:bg-darkGreen focus:outline-none focus:ring focus:ring-white sm:hidden"
        >
          Menu
        </button>
        <ul
          className={
            menuClicked ? `h-max w-min` : `hidden w-full justify-around sm:flex`
          }
        >
          <li>
            <a href="#home">
              <Button text="home" />
            </a>
          </li>
          <li>
            <a href="#projetos">
              <Button text="Projetos" />
            </a>
          </li>
          <li>
            <a href="#tech">
              <Button text="Stack" />
            </a>
          </li>
          <li>
            <a href="#sobre">
              <Button text="Sobre" />
            </a>
          </li>
          <li>
            <a href="#contato">
              <Button text="Contato" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
