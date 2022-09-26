import { Card } from "./card";

export function Projects() {
  const placeholderText = {
    name: "Project Name",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores eius eaque incidunt atque est? Corrupti nam quidem omnis, ipsa exercitationem facere facilis, molestias, esse maxime labore recusandae nulla nobis ex.",
  };
  return (
    <section id="projects" className="h-fit border-2 border-yellow-500">
      {/* Margin top to keep navbar appearing */}
      <h1 className="mx-4 mt-24 w-fit bg-surface1-light p-4 text-center font-sans font-bold md:mx-auto">
        And these are some of my projects.
      </h1>
      <div className="my-12 ml-4 mb-8 flex-row justify-center">
        <Card
          name="HouseHold"
          description="Household is a project made to help people take care of their domestic activities. Task management, Note taking and shopping list. All of these can be done in this app. Log in with your google account to save your data, or log in anonymously and save everything in your browser. Try it out!"
          image="https://i.imgur.com/RMctPlQ.png"
        />
        <div className="lg:flex lg:justify-end">
          <Card
            name={placeholderText.name}
            description={placeholderText.description}
            image="/HeroPlaceholder.jpg"
          />
        </div>
        <Card
          name={placeholderText.name}
          description={placeholderText.description}
          image="/HeroPlaceholder.jpg"
        />
      </div>
    </section>
  );
}
