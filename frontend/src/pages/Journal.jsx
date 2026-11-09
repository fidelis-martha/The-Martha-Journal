
import { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard.jsx";

function Journal() {
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

        setArticles(result.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setError("Unable to load journal articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="bg-journal min-h-screen">

      {/* PAGE INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <p className="text-brown uppercase tracking-[0.3em] text-xs mb-5">
          The collection
        </p>

        <h1 className="font-heading text-5xl md:text-7xl text-charcoal">
          The Journal
        </h1>

        <p className="text-taupe text-lg leading-8 mt-6 max-w-2xl">
          A collection of stories, personal reflections, experiences
          and thoughts about life, growth and everything in between.
        </p>
      </section>

      {/* ARTICLES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="border-t border-beige pt-10 mb-12">
          <h2 className="font-heading text-3xl text-charcoal">
            All Stories
          </h2>

          <p className="text-taupe mt-2">
            Explore the latest stories from my journal.
          </p>
        </div>

        {loading && (
          <p className="text-taupe">Loading journal articles...</p>
        )}

        {error && (
          <p className="text-red-600">{error}</p>
        )}

        {!loading && !error && articles.length === 0 && (
          <p className="text-taupe">
            No published stories yet. Check back soon.
          </p>
        )}

        {!loading && !error && articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}

      </section>

    </div>
  );
}

export default Journal;
