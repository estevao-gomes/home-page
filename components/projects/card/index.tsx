import Image from "next/image";

interface CardProps {
  name: string;
  description: string;
  image: string;
}

export function Card({ name, description, image }: CardProps) {
  return (
    <div className="m-8 rounded-md border-[2px] border-t-surface1-light border-l-surface1-light border-r-brand-light border-b-brand-light pt-4 text-center transition-all duration-1000 hover:border-t-brand-light hover:border-l-brand-light hover:border-b-border-light hover:border-r-border-light hover:shadow-brand-light lg:w-3/4">
      <div className="flex items-center">
        <div className="h-full w-full p-4">
          <Image src={image} width="1000" height="400" layout="responsive" />
        </div>
        <div>
          <h2 className="ml-2 mr-auto w-fit bg-surface1-light p-2 text-text1-light">
            {name}
          </h2>
          <h3 className="p-2 text-justify font-sans text-xs text-text2-light lg:text-sm">
            {description}
          </h3>
          <button
            className="m-4 rounded-lg border-2 border-surface1-light p-2 text-text1-light transition-all duration-500 hover:border-surface2-light hover:bg-brand-light"
            type="button"
          >
            Link
          </button>
          <button
            className="m-4 rounded-lg border-2 border-surface1-light p-2 text-text1-light transition-all duration-500 hover:border-surface2-light hover:bg-brand-light"
            type="button"
          >
            Github
          </button>
        </div>
      </div>
    </div>
  );
}
