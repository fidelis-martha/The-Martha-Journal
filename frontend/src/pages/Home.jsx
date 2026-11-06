
import ArticleCard from "../components/ArticleCard.jsx";

function Home() {

  const articles = [
    {
      id: 1,
      title: "The Beauty of Starting Again",
      category: "Personal Reflections",
      excerpt: "Sometimes, beginning again is not a sign of failure. It is an opportunity to discover a new version of yourself.",
      image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8"
    },
    {
      id: 2,
      title: "Lessons I'm Learning Along the Way",
      category: "Life & Growth",
      excerpt: "Life has a way of teaching us through experiences, unexpected moments and the people we meet.",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
    },
    {
      id: 3,
      title: "Finding Joy in the Little Things",
      category: "Lifestyle",
      excerpt: "A reminder that happiness can sometimes be found in the simplest and most ordinary moments.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
    }
  ];

  return (
    <div className="bg-journal">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-10">
        <div className="max-w-3xl">

          <p className="text-brown uppercase tracking-[0.3em] text-sm mb-6">
            Welcome to my little corner of the internet
          </p>

          <h1 className="font-heading text-5xl md:text-7xl leading-tight text-charcoal">
            Stories, thoughts & everything in between.
          </h1>

          <p className="text-taupe text-lg leading-8 mt-8 max-w-2xl">
            A personal space where I share my experiences, lessons,
            reflections and the little moments that make life meaningful.
          </p>

          <div className="mt-10">
            <a
              href="/journal"
              className="inline-block bg-charcoal text-journal px-8 py-4 rounded-full hover:bg-brown transition"
            >
              Explore the Journal
            </a>
          </div>

        </div>
      </section>

      {/* LATEST STORIES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-beige">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">

          <div>
            <p className="text-brown uppercase tracking-[0.3em] text-xs mb-3">
              From the journal
            </p>

            <h2 className="font-heading text-4xl md:text-5xl text-charcoal">
              Latest Stories
            </h2>
          </div>

          <a
            href="/journal"
            className="text-sm text-charcoal underline underline-offset-4"
          >
            View all stories
          </a>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}

        </div>

      </section>

      
{/* ABOUT MARTHA SECTION */}
<section className="bg-beige py-24">

  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    {/* Image */}
    <div className="h-[450px] rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
        alt="A portrait representing the author"
        className="w-full h-full object-cover"
      />
    </div>

    {/* About Text */}
    <div>

      <p className="text-brown uppercase tracking-[0.3em] text-xs mb-5">
        A little about me
      </p>

      <h2 className="font-heading text-4xl md:text-5xl text-charcoal leading-tight">
        Hello, I'm Martha.
      </h2>

      <p className="text-taupe leading-8 mt-8">
        I'm a storyteller, a dreamer and someone who believes
        that every experience has a story worth telling.
      </p>

      <p className="text-taupe leading-8 mt-4">
        The Martha Journal is my personal space to document
        my thoughts, share my experiences, reflect on life
        and capture the moments that make the journey special.
      </p>

      <a
        href="/about"
        className="inline-block mt-8 bg-charcoal text-journal px-8 py-4 rounded-full hover:bg-brown transition"
      >
        More About Me
      </a>

    </div>

  </div>

</section>


{/* CLOSING CALL TO ACTION */}
<section className="bg-journal py-24 px-6 text-center">

  <div className="max-w-2xl mx-auto">

    <p className="text-brown uppercase tracking-[0.3em] text-xs mb-5">
      Before you go
    </p>

    <h2 className="font-heading text-4xl md:text-5xl text-charcoal leading-tight">
      Every story deserves a place to be told.
    </h2>

    <p className="text-taupe leading-8 mt-6">
      Take a moment, explore the journal and find a story
      that speaks to you.
    </p>

    <a
      href="/journal"
      className="inline-block mt-8 bg-charcoal text-journal px-8 py-4 rounded-full hover:bg-brown transition"
    >
      Explore All Stories
    </a>

  </div>

</section>



    </div>
  );
}

export default Home;
