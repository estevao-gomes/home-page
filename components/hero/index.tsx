import Image from "next/future/image";

import heroImage from "../../public/Hero.jpg";

export function Hero() {
  return (
    <section id="home" className="flex h-screen bg-surface2-light">
      {/* Margin top to keep navbar appearing. After pseudo creates angled effect on image */}
      <div className="relative flex h-1/2 flex-1 items-center justify-center self-center bg-brand-light after:absolute after:left-24 after:z-0 after:block after:h-full after:w-full after:-skew-x-12 after:bg-brand-light dark:bg-brand-dark after:dark:bg-brand-dark">
        <div className="relative z-10 ml-4 text-center md:ml-0">
          <h1 className="mt-6 h-fit bg-surface3-light p-4 font-sans font-bold text-text1-light shadow-lg dark:bg-surface3-dark dark:text-text1-dark md:text-6xl">
            Estevão Gomes
          </h1>
          <h2 className="mt-2 h-fit bg-surface3-light py-4 text-text2-light shadow dark:text-text2-dark">
            {" "}
            Front-End Developer
          </h2>
        </div>
      </div>

      <div className="flex h-full flex-1">
        <Image
          src={heroImage}
          className="h-1/2 w-full self-center"
          alt="Estevao Gomes Image"
          priority
        />
      </div>
    </section>
  );
}
