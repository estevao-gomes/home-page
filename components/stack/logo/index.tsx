import Image from "next/future/image";

interface LogoProps {
  path: any;
  name: string;
}
export function Logo({ path, name }: LogoProps) {
  return (
    <div className="flex h-[80%] w-1/6 flex-col items-center justify-center text-center">
      <Image src={path} className="h-[10rem] w-[10rem]" />
      <h3 className="mt-2 font-mono font-bold text-text2-light">{name}</h3>
    </div>
  );
}
