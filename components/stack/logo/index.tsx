import Image from "next/image";

interface LogoProps {
  path: any;
  name: string;
}
export function Logo({ path, name }: LogoProps) {
  return (
    <div className="flex h-1/5 flex-col items-center justify-center text-center">
      <div className="w-full">
        <Image src={path} width="150" height="150" layout="fixed" />
      </div>
      <h3 className="mt-2 font-mono font-bold text-text2-light">{name}</h3>
    </div>
  );
}
