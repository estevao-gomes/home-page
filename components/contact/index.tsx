export function Contact() {
  return (
    <section id="contact" className="bg-surface1-light text-center font-sans">
      <div className="mx-auto flex h-screen w-1/2 flex-col items-center justify-center">
        <h1 className="mt-6 bg-surface2-light p-4 font-bold text-text1-light shadow-lg lg:text-5xl">
          Get in Touch!
        </h1>
        <h2 className="my-8 text-base text-text2-light md:text-2xl ">
          <p>
            If you saw anything interesting, have some projects you want to know
            more about, or see an opportunity for colaboration, you can reach
            through my email below!
          </p>
          <p>
            Or, if you prefer, you can also look me up on any of my social
            networks using the buttons on the left.
          </p>
          <p className="mt-2 text-brand-light">See you soon!!</p>
        </h2>
        <a
          href="mailto:estevaog.gomes@gmail.com"
          className="text-text-1-light hover:border-surface-2-light rounded-md border-2 border-brand-light py-4 px-2 transition-all duration-300 hover:bg-brand-light"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
