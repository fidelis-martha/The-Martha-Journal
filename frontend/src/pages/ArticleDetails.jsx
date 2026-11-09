
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ArticleDetails() {
  const { slug } = useParams();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://the-martha-journal.onrender.com/api/articles/${slug}`
        );

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || "Article not found");
        }

        setArticle(result.data);
      } catch (error) {
        console.error("Error fetching article:", error);
        setError("We couldn't find this story.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-journal flex items-center justify-center">
        <p className="text-taupe">Loading story...</p>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-journal flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-heading text-4xl text-charcoal">
          Story not found
        </h1>

        <p className="text-taupe mt-4">
          {error || "Sorry, we couldn't find this article."}
        </p>

        <Link
          to="/journal"
          className="mt-8 bg-charcoal text-journal px-7 py-3 rounded-full"
        >
          Back to Journal
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-journal min-h-screen">

      {/* ARTICLE HEADER */}
      <header className="max-w-5xl mx-auto px-6 pt-20 pb-12">

        <Link
          to="/journal"
          className="text-taupe text-sm hover:text-brown transition"
        >
          ← Back to Journal
        </Link>

        <p className="text-brown uppercase tracking-[0.3em] text-xs mt-12">
          {article.category}
        </p>

        <h1 className="font-heading text-4xl md:text-6xl leading-tight text-charcoal mt-5">
          {article.title}
        </h1>

        <p className="text-taupe text-sm mt-6">
          Published on{" "}
          {article.published_at
            ? new Date(article.published_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "Not yet published"}
        </p>

      </header>

      {/* FEATURED IMAGE */}
      {article.image_url && (
        <div className="max-w-5xl mx-auto px-6">
          <img
            src={article.image_url}
            alt={article.title}
            className="w-full h-[300px] md:h-[500px] object-cover rounded-lg"
          />
        </div>
      )}

      {/* ARTICLE CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        <div className="space-y-7">
          {article.content
            .split(/\n+/)
            .filter((paragraph) => paragraph.trim() !== "")
            .map((paragraph, index) => (
              <p
                key={index}
                className="text-taupe text-lg leading-9"
              >
                {paragraph}
              </p>
            ))}
        </div>

        <div className="border-t border-beige mt-16 pt-8">
          <Link
            to="/journal"
            className="text-charcoal underline underline-offset-4 hover:text-brown"
          >
            ← Explore more stories
          </Link>
        </div>

      </div>

    </article>
  );
}

export default ArticleDetails;
