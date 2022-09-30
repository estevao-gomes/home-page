import { Card } from "./card";

export function Projects() {
  return (
    <section id="projects" className="h-fit font-sans">
      {/* Margin top to keep navbar appearing */}
      <h1 className="mx-4 mt-24 w-fit bg-surface1-light p-4 text-center font-sans font-bold text-text1-light shadow-lg md:mx-auto lg:text-5xl">
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
            name="WeatherGetteer"
            description="WeatherGetter is a project made as part of a challenge from HUBR company to develop a React project in 10 days. It tells you the weather conditions in your actual location, or any other place in the world."
            image="https://i.imgur.com/59DOcvk.png"
          />
        </div>

        <Card
          name="FeedbackApp"
          description="The Project This is a simple feedback component, made to be implemented in any React developed application, where the user can share feedback with the app owner, which will receive said feedback through email. It was made during the NLW-Return Event, from RocketSeat."
          image="https://i.imgur.com/NLlQLb3.png"
        />
      </div>
    </section>
  );
}
