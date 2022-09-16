import Image from "next/future/image";
import placeholder from "../../public/HeroPlaceholder.jpg";

export function Hero() {
  return (
    // The border are to be removed on production
    <section
      id="home"
      className="flex h-screen border-2 border-green-500 bg-surface1Light"
    >
      {/* Margin top to keep navbar appearing */}
      <div className="relative flex h-1/2 flex-1 items-center justify-center self-center border-2 border-green-900 bg-brandLight after:absolute after:left-24 after:z-0 after:block after:h-full after:w-full after:-skew-x-12 after:bg-brandLight">
        <div className="relative z-10 text-center">
          <h1 className="mt-6 h-fit font-sans text-6xl font-bold text-text1Light">
            Hero Text
          </h1>
          <h2 className="mt-2 h-fit text-text2Light"> Hero subtext</h2>
        </div>
      </div>
      <div className="flex h-full flex-1 border-2 border-green-900">
        <Image
          src={placeholder}
          className="h-1/2 w-full self-center"
          alt="Placeholder Image"
        />
      </div>
    </section>
  );
}
