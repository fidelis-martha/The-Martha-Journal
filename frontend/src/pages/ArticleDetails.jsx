
import { Link, useParams } from "react-router-dom";

function ArticleDetails() {
  const { id } = useParams();

  const articles = [
    {
      id: 1,
      title: "The Beauty of Starting Again",
      category: "Personal Reflections",
      date: "November 6, 2026",
      image:
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8",
      content: [
        "Sometimes, life takes us through seasons we never expected. There are moments when we have to pause, reflect and find the courage to begin again.",
        "Starting again does not mean that everything you did before was a waste. It means you have learned something from the journey and are choosing to move forward with a different perspective.",
        "I am learning that growth is not always about having everything figured out. Sometimes, it is simply about showing up, taking small steps and trusting the process.",
        "And perhaps that is the beauty of starting again: every new beginning gives us another opportunity to become who we are meant to be."
      ]
    },
    {
      id: 2,
      title: "Lessons I'm Learning Along the Way",
      category: "Life & Growth",
      date: "November 5, 2026",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      content: [
        "Life has a way of teaching us through experiences, unexpected moments and the people we meet.",
        "One lesson I am learning is that growth takes patience. Not every result comes immediately, and not every season will look the way we imagined.",
        "I am learning to appreciate progress, even when it feels small."
      ]
    },
    {
      id: 3,
      title: "Finding Joy in the Little Things",
      category: "Lifestyle",
      date: "November 4, 2026",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      content: [
        "Sometimes, we become so focused on the big things we want to achieve that we forget to appreciate the little moments happening around us.",
        "A quiet morning, a good conversation, a beautiful sunset or simply having time to reflect can make an ordinary day meaningful.",
        "Perhaps joy is not always something we have to chase. Sometimes, it is something we need to notice."
      ]
    }
  ];

  const article = articles.find(
    (item) => item.id === Number(id)
  );

  if (!article) {
    return (
      <div className="min-h-screen bg-journal  flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-heading text-4xl text-charcoal">
          Story not found
        </h1>

        <p className="text-taupe mt-4">
          Sorry, we couldn't find the article you're looking for.
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
          Published on {article.date}
        </p>

      </header>

      {/* FEATURED IMAGE */}
      <div className="max-w-5xl mx-auto px-6">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-[300px] md:h-[500px] object-cover rounded-lg"
        />
      </div>

      {/* ARTICLE CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        <div className="space-y-7">
          {article.content.map((paragraph, index) => (
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
