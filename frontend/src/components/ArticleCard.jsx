
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <article className="group">
      <Link to={`/article/${article.id}`}>
        <div className="overflow-hidden rounded-lg bg-beige">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        <p className="text-brown text-xs uppercase tracking-widest mt-5">
          {article.category}
        </p>

        <h3 className="font-heading text-2xl text-charcoal mt-3 group-hover:text-brown transition">
          {article.title}
        </h3>

        <p className="text-taupe leading-7 mt-3">
          {article.excerpt}
        </p>

        <p className="text-sm text-charcoal mt-5 underline underline-offset-4">
          Read article
        </p>
      </Link>
    </article>
  );
}

export default ArticleCard;
