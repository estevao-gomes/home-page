import Image from "next/image";
import { Transition } from "@headlessui/react";

interface LogoProps {
  path: any;
  name: string;
  isInViewport: boolean;
}
export function Logo({ path, name, isInViewport }: LogoProps) {
  // Viewport check is received from section because checking logo for view port causes strange rendering behavior.

  return (
    <div className="flex h-1/5 flex-col items-center justify-center text-center">
      <div className="w-full">
        <Transition
          show={isInViewport}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <Image src={path} width="100" height="100" layout="fixed" />
        </Transition>
      </div>
      <h3 className="mt-2 font-mono font-bold text-text2-light">{name}</h3>
    </div>
  );
}
