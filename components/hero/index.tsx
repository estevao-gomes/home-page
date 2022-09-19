import Image from "next/future/image";
import placeholder from "../../public/HeroPlaceholder.jpg";

export function Hero() {
  return (
    // The border are to be removed on production
    <section
      id="home"
      className="flex h-screen border-0 border-green-500  bg-surface2-light"
    >
      {/* Margin top to keep navbar appearing. After pseudo creates angled effect on image */}
      <div className="relative flex h-1/2 flex-1 items-center justify-center self-center border-0 border-green-900 bg-brand-light after:absolute after:left-24 after:z-0 after:block after:h-full after:w-full after:-skew-x-12 after:bg-brand-light">
        <div className="relative z-10 text-center">
          <h1 className="text-text1Light mt-6 h-fit bg-surface3-light p-4 font-sans text-6xl font-bold shadow-lg">
            Estevão Gomes
          </h1>
          <h2 className="mt-2 h-fit bg-surface3-light py-4 text-text2-light shadow">
            {" "}
            Front-End Developer
          </h2>
        </div>
      </div>
      <div className="flex h-full flex-1 border-0 border-green-900">
        <Image
          src={placeholder}
          className="h-1/2 w-full self-center"
          alt="Placeholder Image"
        />
      </div>
    </section>
  );
}
