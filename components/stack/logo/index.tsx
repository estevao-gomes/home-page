import Image from "next/image";
import { RefObject } from "react";
import { Transition } from "@headlessui/react";

import { useIsInViewport } from "../../../hooks/useIsInViewport";

interface LogoProps {
  path: any;
  name: string;
  sectionRef: RefObject<HTMLDivElement>
}
export function Logo({ path, name, sectionRef }: LogoProps) {
  
  const isInViewport = useIsInViewport(sectionRef);
  console.log("Logos are in viewport: ", isInViewport);
  return (
    <div className="flex h-1/5 flex-col items-center justify-center text-center">
      <div ref={sectionRef} className="w-full">
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
