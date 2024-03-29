import Image, { StaticImageData } from "next/image";

interface ProjectProps {
  image: StaticImageData;
  rightAligned?: boolean;
  info: {
    title: string;
    description: string;
    techs: string[];
    link: string;
  };
}
export function Project({ image, rightAligned, info }: ProjectProps) {
  return (
    <div
      className={`mb-2 flex w-full min-w-min flex-col items-center sm:mb-8 sm:flex-row ${
        rightAligned ? "sm:mr-16 sm:justify-end" : "sm:ml-16 sm:justify-start"
      }`}
    >
      <p
        className={`${
          rightAligned ? "order-1" : "order-2"
        } mx-4 sm:max-w-[25%]`}
      >
        <a  target="_blank" href={info.link} className="hover:opacity-50">
          <h2 className="mb-4 font-openSansCondensed text-4xl font-bold">
            {info.title}
          </h2>
        </a>
        <h3 className="mb-4 text-justify font-PTSans">{info.description}</h3>
        <ul className="font-PTSans">
          <p className="font-bold">Principais tecnologias:</p>
          {info.techs.map((tech, index) => {
            return <li key={tech.concat("_", index.toString())}>{tech}</li>;
          })}
        </ul>
      </p>
      <div className="w-[300px] xl:w-[600px] 2xl:w-[800px]">
        <a target="_blank" href={info.link} className="relative hover:opacity-50">
          <Image
            src={image}
            alt={`image of ${info.title} on multiple screens of different sizes`}
            width={1500}
            className={`${rightAligned ? "order-2" : "order-1"} mb-4 sm:mb-0`}
          />
        </a>
      </div>
    </div>
  );
}
