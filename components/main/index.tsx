import { ReactElement } from "react";

interface MainProps {
  children: ReactElement[];
}

export function Main({ children }: MainProps) {
  return <main className="">{children}</main>;
}
