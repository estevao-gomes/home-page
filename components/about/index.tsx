import Image from "next/future/image";
import placeholder from "../../public/HeroPlaceholder.jpg";

export function About() {
  // Borders are to be removed on production
  return (
    <section
      id="about"
      className="flex h-screen items-center bg-surface1-light"
    >
      {/* Margin top to keep navbar appearing */}
      <div className="flex flex-1 justify-center">
        <div className="mx-8 flex overflow-hidden rounded-full border-8 border-surface2-light bg-black shadow-xl lg:mt-8 lg:h-[30em] lg:w-[30em]">
          <Image src={placeholder} className="" />
        </div>
      </div>
      <div className="mx-8 flex-1">
        <h1>
          <p className="font-bold text-text1-light">
            Hello, I am <span className="text-brand-light">Estevão Gomes.</span>
          </p>
        </h1>
        <h2 className="text-base lg:text-2xl">
          <p className="mt-4 text-text2-light">
            I’m interested in learning more about the web development and coding
            world. I also know a thing or two about microcontrollers, solar
            energy and energy storage!
          </p>

          <p className="mt-4 text-text2-light">
            I&apos;m trying my best to learn and become a front end developer in
            React and if you have any projects you believe I could colaborate
            in, don&apos;t hesitate to contact me.
          </p>
        </h2>
      </div>
    </section>
  );
}
