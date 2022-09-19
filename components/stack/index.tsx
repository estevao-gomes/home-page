import { Logo } from "./logo";
import firebase from "../../public/firebase.svg";
import javascript from "../../public/javascript.svg";
import typescript from "../../public/typescript-icon.svg";
import nextjs from "../../public/nextjs.svg";
import tailwindcss from "../../public/tailwindcss-icon.svg";
import react from "../../public/react.svg";

export function Stack() {
  return (
    <section
      id="stack"
      className="flex h-screen flex-col items-center justify-center border-2 border-green-500 bg-surface2-light"
    >
      <h1 className="mx-4 mt-32 flex h-fit w-fit items-center justify-center bg-surface3-light p-8 text-center font-sans font-bold text-text1-light shadow-lg lg:text-5xl">
        Here is some of the tech I have worked with...
      </h1>
      <div className="flex flex-1 justify-center gap-16 self-center justify-self-start">
        <Logo path={javascript} name="Javascript(ES6+)" />
        <Logo path={typescript} name="Typescript" />
        <Logo path={react} name="React" />
        <Logo path={nextjs} name="NextJS" />
        <Logo path={tailwindcss} name="TailwindCSS" />
        <Logo path={firebase} name="Firebase" />
      </div>
    </section>
  );
}
