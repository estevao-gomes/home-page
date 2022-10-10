import Image from "next/image";

interface LogoProps {
  path: any;
  name: string;
}
export function Logo({ path, name }: LogoProps) {
  // Viewport check is received from section because checking logo for viewport causes strange rendering behavior.

  return (
    <div className="flex h-1/5 flex-col items-center justify-center text-center">
      <div className="w-full">
        <Image
          src={path}
          width="100"
          height="100"
          layout="fixed"
          alt={`${name} logo`}
        />
      </div>
      <h3 className="mt-2 font-mono font-bold text-text2-light dark:text-text2-dark">
        {name}
      </h3>
    </div>
  );
}
