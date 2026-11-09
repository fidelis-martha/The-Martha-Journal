
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard.jsx";

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://the-martha-journal.onrender.com/api/articles"
        );

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || "Failed to retrieve articles");
        }

        // Get only the three latest published articles
        setArticles(result.data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching latest stories:", error);
        setError("Unable to load the latest stories.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

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
            <Link
              to="/journal"
              className="inline-block bg-charcoal text-journal px-8 py-4 rounded-full hover:bg-brown transition"
            >
              Explore the Journal
            </Link>
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

          <Link
            to="/journal"
            className="text-sm text-charcoal underline underline-offset-4"
          >
            View all stories
          </Link>

        </div>

        {loading && (
          <p className="text-taupe">Loading latest stories...</p>
        )}

        {error && (
          <p className="text-red-600">{error}</p>
        )}

        {!loading && !error && articles.length === 0 && (
          <p className="text-taupe">No published stories yet.</p>
        )}

        {!loading && !error && articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}

      </section>

      {/* ABOUT MARTHA SECTION */}
      <section className="bg-beige py-24">

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div className="h-[450px] rounded-lg overflow-hidden">
            <img
              src="https://res.cloudinary.com/mlbmsn0a/image/upload/v1794237727/file-to-link/myheadshot-1794237727128.jpg.jpg"
              alt="A portrait representing the author"
              className="w-full h-full object-cover"
            />
          </div>

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

            <Link
              to="/about"
              className="inline-block mt-8 bg-charcoal text-journal px-8 py-4 rounded-full hover:bg-brown transition"
            >
              More About Me
            </Link>
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

          <Link
            to="/journal"
            className="inline-block mt-8 bg-charcoal text-journal px-8 py-4 rounded-full hover:bg-brown transition"
          >
            Explore All Stories
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;
