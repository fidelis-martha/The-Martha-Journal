
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
          A little about the person behind the stories, the ideas,
          and the journey.
        </p>

      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div className="h-[450px] rounded-lg overflow-hidden">
            <img
              src="https://res.cloudinary.com/mlbmsn0a/image/upload/v1794237727/file-to-link/myheadshot-1794237727128.jpg.jpg"
              alt="Portrait of Martha"
              className="w-full h-full object-cover"
            />
          </div>

          <div>

            <h2 className="font-heading text-4xl text-charcoal">
              Hello, I'm Martha.
            </h2>

            <p className="text-taupe leading-8 mt-7">
           I'm a Software Engineering student at the University of Delta, Nigeria, with a heart for technology and a desire to build things that make a difference.
            </p>

            <p className="text-taupe leading-8 mt-5">
             My journey in tech has been one of curiosity, challenges, learning, and growth. From building web applications to exploring backend development, I'm constantly discovering how much more there is to learn and create.
            </p>

            <p className="text-taupe leading-8 mt-5">
            I'm also finding my place in the world of Web3 and blockchain, with a dream of becoming a Blockchain Engineer someday. It's a journey I'm taking one step, one lesson, and one project at a time.
            </p>

            <p className="text-taupe leading-8 mt-5">
             Beyond tech, I love creativity, personal growth, and capturing the little moments that make life meaningful.
            </p>

            <p className="font-heading italic text-2xl text-brown mt-8">
              "I'm still becoming, and every step of the journey is worth remembering."
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
            The Martha Journal is my personal corner of the internet.
            A space where technology meets personal expression, where
            I can document my experiences, share my thoughts, reflect
            on lessons, celebrate progress, and capture the different
            chapters of my life.

            <br /><br />

            It's not just about where I am today, but also about who
            I'm becoming.

            <br /><br />

            I'm learning, building, exploring, and figuring things out
            along the way. I created this space to document that journey
            and share the stories, thoughts, and experiences that make
            it meaningful.

            <br /><br />

            Welcome to The Martha Journal. A space for stories, thoughts,
            experiences and everything in between.
          </p>

        </div>

      </section>

    </div>
  );
}

export default About;
