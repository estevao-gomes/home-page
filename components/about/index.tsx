import Image from "next/future/image";
import { useRef, RefObject } from "react";
import { Transition } from "@headlessui/react";
import { useIsInViewport } from "../../hooks/useIsInViewport";

import photo from "../../public/Photo.jpg";

export function About() {
  // Ref on section is sent to isInViewport hook.
  const sectionRef = useRef() as RefObject<HTMLDivElement>;
  // Returns true if section is in viewport, else, false
  const isInViewport = useIsInViewport(sectionRef);

  // Borders are to be removed on production
  return (
    <section
      ref={sectionRef}
      id="about"
      className="flex h-screen items-center bg-surface1-light"
    >
      <div className="flex flex-1 justify-center">
        {/* Sets content to appear on screen when on viewport */}
        <Transition
          show={isInViewport}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="mx-2 flex overflow-hidden bg-black shadow-xl md:mx-8 md:rounded-full md:border-8 md:border-surface2-light lg:mt-8 lg:h-[30em] lg:w-[30em]">
            <Image src={photo} className="" alt="About Me Image" />
          </div>
        </Transition>
      </div>
      <div className="mx-8 flex-1">
        {/* Sets content to appear on screen when on viewport */}
        <Transition
          show={isInViewport}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <h1>
            <p className="font-bold text-text1-light">
              Hello, I am{" "}
              <span className="text-brand-light">Estevão Gomes.</span>
            </p>
          </h1>
          <h2 className="text-base lg:text-2xl">
            <p className="mt-4 text-text2-light">
              I’m interested in learning more about the web development and
              coding world. I also know a thing or two about microcontrollers,
              solar energy and energy storage!
            </p>

            <p className="mt-4 text-text2-light">
              I&apos;m trying my best to learn and become a front end developer
              in React and if you have any projects you believe I could
              colaborate in, don&apos;t hesitate to contact me.
            </p>
          </h2>
        </Transition>
      </div>
    </section>
  );
}
