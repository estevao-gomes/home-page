import { useRef, RefObject } from "react";
import { Logo } from "./logo";
import firebase from "../../public/firebase.svg";
import javascript from "../../public/javascript.svg";
import typescript from "../../public/typescript-icon.svg";
import nextjs from "../../public/nextjs.svg";
import tailwindcss from "../../public/tailwindcss-icon.svg";
import react from "../../public/react.svg";
import { useIsInViewport } from "../../hooks/useIsInViewport";

type logoType = {
  name: string;
  path: string;
};

export function Stack() {
  // Creating ref to check for viewport and pass to Logo.
  const sectionRef = useRef() as RefObject<HTMLDivElement>;

  const isInViewport: boolean = useIsInViewport(sectionRef);

  // Creates logo list to facilitate insertion of new techs.
  const logos: logoType[] = [
    { name: "firebase", path: firebase },
    { name: "javascript", path: javascript },
    { name: "typescript", path: typescript },
    { name: "tailwindcss", path: tailwindcss },
    { name: "nextjs", path: nextjs },
    { name: "react", path: react },
  ];
  function generateKey(pre: string) {
    return `${pre}_${new Date().getTime()}`;
  }

  return (
    <section
      ref={sectionRef}
      id="stack"
      className="flex flex-col items-center justify-center border-0 border-green-500 bg-surface2-light sm:h-screen"
    >
      <h1 className="mx-4 my-16 flex h-fit w-fit items-center justify-center bg-surface3-light p-8 text-center font-sans font-bold text-text1-light shadow-lg sm:mt-32 lg:text-5xl">
        Here is some of the tech I work with...
      </h1>
      <div className="mb-8 flex w-full flex-1 flex-wrap items-center justify-center gap-12 self-center justify-self-start">
        {logos.map((logo, index) => (
          <Logo
            key={generateKey(`Logo_${index}`)}
            isInViewport={isInViewport}
            path={logo.path}
            name={logo.name}
          />
        ))}
      </div>
    </section>
  );
}
