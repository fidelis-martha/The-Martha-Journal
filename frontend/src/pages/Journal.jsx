
import ArticleCard from "../components/ArticleCard.jsx";

function Journal() {
  const articles = [
    {
      id: 1,
      title: "The Beauty of Starting Again",
      category: "Personal Reflections",
      excerpt:
        "Sometimes, beginning again is not a sign of failure. It is an opportunity to discover a new version of yourself.",
      image:
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8",
    },
    {
      id: 2,
      title: "Lessons I'm Learning Along the Way",
      category: "Life & Growth",
      excerpt:
        "Life has a way of teaching us through experiences, unexpected moments and the people we meet.",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    },
    {
      id: 3,
      title: "Finding Joy in the Little Things",
      category: "Lifestyle",
      excerpt:
        "A reminder that happiness can sometimes be found in the simplest and most ordinary moments.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}

        </div>

      </section>

    </div>
  );
}

export default Journal;
