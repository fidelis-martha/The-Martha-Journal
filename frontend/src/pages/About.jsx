
function About() {
  return (
    <div className="bg-journal min-h-screen">

      {/* PAGE INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <p className="text-brown uppercase tracking-[0.3em] text-xs mb-5">
          Behind the journal
        </p>

        <h1 className="font-heading text-5xl md:text-7xl text-charcoal">
          About Martha
        </h1>

        <p className="text-taupe text-lg leading-8 mt-6 max-w-2xl">
          Every journal has a voice, and this is the story behind mine.
        </p>

      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div className="h-[450px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
              alt="Portrait representing Martha"
              className="w-full h-full object-cover"
            />
          </div>

          <div>

            <h2 className="font-heading text-4xl text-charcoal">
              Hello, I'm Martha.
            </h2>

            <p className="text-taupe leading-8 mt-7">
              I'm someone who loves stories, creativity, personal
              growth and the beautiful experiences that make life
              what it is.
            </p>

            <p className="text-taupe leading-8 mt-5">
              As I navigate life, education, technology and my
              personal journey, I've come to appreciate the value
              of documenting experiences and sharing lessons
              along the way.
            </p>

            <p className="text-taupe leading-8 mt-5">
              The Martha Journal was created as a personal space
              to express myself freely, preserve memories and share
              stories that might inspire someone else.
            </p>

            <p className="font-heading italic text-2xl text-brown mt-8">
              "Every experience has a story worth telling."
            </p>

          </div>

        </div>

      </section>

      {/* JOURNAL PURPOSE */}
      <section className="bg-beige py-24 px-6">

        <div className="max-w-3xl mx-auto text-center">

          <p className="text-brown uppercase tracking-[0.3em] text-xs mb-5">
            The purpose
          </p>

          <h2 className="font-heading text-4xl md:text-5xl text-charcoal">
            Why The Martha Journal?
          </h2>

          <p className="text-taupe leading-8 mt-7">
            A space for stories, thoughts, experiences and everything
            in between. A place where I can document my journey,
            celebrate growth, share reflections and remind myself
            that even the smallest moments matter.
          </p>

        </div>

      </section>

    </div>
  );
}

export default About;
