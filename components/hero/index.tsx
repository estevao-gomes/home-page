import Image from "next/future/image";
import placeholder from "../../public/HeroPlaceholder.jpg";

export function Hero() {
  return (
    <section id="home" className="flex h-screen border-2 border-green-500">
      {/* Margin top to keep navbar appearing */}
      <div className="relative flex h-full flex-1 items-center justify-center border-2 border-green-900 after:absolute after:left-24 after:z-0 after:block after:h-1/2 after:w-full after:-skew-x-12 after:bg-brand">
        <div className="relative z-10 bg-brand text-center">
          <h1 className="mt-6 h-fit">Hero Text</h1>
          <h2 className="mt-2 h-fit"> Hero subtext</h2>
        </div>
      </div>
      <div className="flex h-full flex-1 border-2 border-green-900">
        <Image
          src={placeholder}
          className="w-full self-center"
          alt="Placeholder Image"
        />
      </div>
    </section>
  );
}
