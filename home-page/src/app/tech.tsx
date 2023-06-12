function TechItem({ text, highlight }: { text: string; highlight?: boolean }) {
  return (
    <li
      className={`rounded-2xl py-2 ${
        highlight ? "bg-lightGreen" : "bg-darkGreen"
      } my-1 px-2 py-1 font-openSans text-xl font-bold text-white`}
    >
      {text}
    </li>
  );
}

export function Tech() {
  const techItems = [
    "HTML/CSS",
    "TailwindCSS",
    "Styled-Components",
    "SASS",
    "Git",
    "Docker",
    "NodeJS",
    "Firebase",
    "SCRUM",
    "Redux",
  ];

  return (
    <section
      id="tech"
      className="mt-4 flex min-h-[50vh] w-full flex-col justify-center bg-bgGreen pl-12 pt-16 sm:pl-36"
    >
      <h2 className="max-w-[75%] font-openSans text-3xl font-bold sm:text-5xl">
        Tecnologias
      </h2>
      <h4 className="mt-10 max-w-[75%] font-PTSans leading-relaxed sm:text-base">
        Linguagens, bibliotecas, frameworks e outras ferramentas com os quais já
        trabalhei.
      </h4>
      <ul className="mt-10 flex max-w-[900px] flex-wrap gap-6">
        <TechItem text={"React"} highlight />
        <TechItem text={"NextJS"} highlight />
        <TechItem text={"Typescript"} highlight />
        {techItems.map((item, index) => {
          return <TechItem key={item + index.toString()} text={item} />;
        })}
      </ul>
    </section>
  );
}
