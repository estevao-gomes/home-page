import { ReactElement } from "react";

export function Icon({
  children,
  link,
}: {
  children: ReactElement;
  link: string;
}) {
  return (
    <a target="_blank" href={link}>
      <button className="mx-2 w-fit rounded-md bg-lightGreen p-1 ring-white hover:bg-darkGreen hover:ring-1 focus:bg-darkGreen focus:ring-1">
        {children}
      </button>
    </a>
  );
}
