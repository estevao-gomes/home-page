import { useRef, RefObject } from "react";
import { Logo } from "./logo";
import firebase from "../../public/firebase.svg";
import javascript from "../../public/javascript.svg";
import typescript from "../../public/typescript-icon.svg";
import nextjs from "../../public/nextjs.svg";
import tailwindcss from "../../public/tailwindcss-icon.svg";
import react from "../../public/react.svg";
import { useIsInViewport } from "../../hooks/useIsInViewport";

export function Stack() {
  // Creating ref to check for viewport and pass to Logo.
  const sectionRef = useRef() as RefObject<HTMLDivElement>;

  const isInViewport = useIsInViewport(sectionRef);

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
        <Logo
          isInViewport={isInViewport}
          path={javascript}
          name="Javascript(ES6+)"
        />
        <Logo isInViewport={isInViewport} path={typescript} name="Typescript" />
        <Logo isInViewport={isInViewport} path={react} name="React" />
        <Logo isInViewport={isInViewport} path={nextjs} name="NextJS" />
        <Logo
          isInViewport={isInViewport}
          path={tailwindcss}
          name="TailwindCSS"
        />
        <Logo isInViewport={isInViewport} path={firebase} name="Firebase" />
      </div>
    </section>
  );
}
