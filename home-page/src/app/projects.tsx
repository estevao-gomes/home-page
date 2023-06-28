import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Project } from "@/components/Project";

import siteIngles from "@/assets/siteIngles.png";
import siteReM from "@/assets/siteReM.jpg";
import siteHousehold from "@/assets/siteHousehold.jpg";

export function Projects() {
  const projectInfo_2 = {
    title: "Rick and Morty Database",
    description:
      "Este é um catálogo de todos os personagens do show Ricky and Morty, com diversas funcionalidades e responsivo para ser visualizado em qualquer lugar. Este projeto foi criado com Next.js 13 e TypeScript e consome a API do Rick and Morty (https://rickandmortyapi.com/documentation/).",
    techs: ["NextJS", "Typescript", "TailwindCss", "React-query"],
    link: "https://desafio-tecnico-front.vercel.app/",
  };
  const projectInfo_1 = {
    title: "Fernanda Santos - Professora de Inglês",
    description:
      "Esta é uma Landing Page feita em NextJS e Typescript, para aulas online de inglês.",
    techs: ["NextJS", "Typescript", "TailwindCSS", "EmailJS"],
    link: "https://fgsidiomas.com",
  };
  const projectInfo_3 = {
    title: "Household",
    description:
      "Household é um projeto criado para ajudar as pessoas a cuidarem de suas atividades domésticas. Gerenciamento de tarefas, anotações e lista de compras. Tudo isso pode ser feito neste aplicativo. Faça login com sua conta do Google para salvar seus dados, ou faça login de forma anônima e salve tudo em seu navegador.",
    techs: ["Vite", "Typescript", "TailwindCSS", "Firebase", "Headless/UI"],
    link: "http://house-hold.vercel.app/",
  };
  return (
    <section id="projetos" className="mt-4 flex flex-col items-center pt-16">
      <h2 className="max-w-[75%] font-openSans text-3xl font-bold sm:text-5xl">
        Projetos
      </h2>
      <h4 className="mx-2 my-4 text-center sm:mx-0">
        Ideias e desafios que pude trazer a vida através da programação. Todos
        estes, e outros projetos, podem ser encontrados em meu repositório do
        Github.
      </h4>
      <div className="mx-4 my-4 grid min-h-[100vh] w-full grid-rows-3 gap-4 sm:mx-0 sm:gap-16">
        <div className="flex w-full justify-center">
          <Project image={siteHousehold} info={projectInfo_3} />
        </div>
        <div className="flex w-full justify-center">
          <Project image={siteIngles} info={projectInfo_1} rightAligned/>
        </div>
        <div className="flex w-full justify-center">
          <Project image={siteReM} info={projectInfo_2}/>
        </div>
      </div>
      <a href="https://github.com/estevao-gomes" target="_blank">
        <button className="my-4 flex rounded-2xl bg-lightGreen px-2 py-2 font-openSans text-xl font-bold text-white hover:bg-darkGreen focus:bg-darkGreen focus:outline-none focus:ring focus:ring-white sm:text-3xl">
          <FontAwesomeIcon
            icon={faGithub}
            className="mr-2 aspect-square w-6 text-white sm:w-9"
          />{" "}
          Github
        </button>
      </a>
    </section>
  );
}
