import Image from "next/image";
import styles from "./index.module.css";

interface CardProps {
  name: string;
  description: string;
  image: string;
  link: string;
  github: string;
}

export function Card({ name, description, image, link, github }: CardProps) {
  return (
    <div className="m-8 rounded-md border-[2px] border-t-surface1-light border-l-surface1-light border-r-brand-light border-b-brand-light pt-4 text-center transition-all duration-1000 hover:border-t-brand-light hover:border-l-brand-light hover:border-b-border-light hover:border-r-border-light hover:shadow-brand-light lg:w-3/4">
      <div className={styles.cardContainer}>
        <div className="h-full w-full p-4">
          <Image
            src={image}
            width="1000"
            height="400"
            layout="responsive"
            alt={`${name} page image`}
          />
        </div>
        <div>
          <h2 className="ml-2 mr-auto w-fit bg-surface1-light p-2 text-text1-light">
            {name}
          </h2>
          <h3 className="p-2 text-justify font-sans text-xs text-text2-light lg:text-sm">
            {description}
          </h3>
          <a
            className="m-4 inline-block rounded-lg border-2 border-surface1-light p-2 text-text1-light transition-all duration-500 hover:border-surface2-light hover:bg-brand-light"
            href={link}
          >
            Link
          </a>
          <a
            className="m-4 inline-block rounded-lg border-2 border-surface1-light p-2 text-text1-light transition-all duration-500 hover:border-surface2-light hover:bg-brand-light"
            href={github}
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
