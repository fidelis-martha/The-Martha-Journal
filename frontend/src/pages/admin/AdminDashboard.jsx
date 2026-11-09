import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("adminToken");

  const fetchArticles = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://the-martha-journal.onrender.com/api/admin/articles",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const result = await response.json();

      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem("adminToken");
        navigate("/admin");
        return;
      }

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to fetch articles");
      }

      setArticles(result.data);
    } catch (error) {
      setError(error.message || "Failed to load articles.");
    } finally {
      setLoading(false);
    }
  }, [token, navigate]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const handlePublish = async (id) => {
    try {
      setMessage("");
      setError("");

      const response = await fetch(
        `https://the-martha-journal.onrender.com/api/admin/articles/${id}/publish`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to publish article");
      }

      setMessage("Article published successfully!");
      await fetchArticles();
    } catch (error) {
      setError(error.message || "Failed to publish article.");
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this article?",
    );

    if (!confirmed) return;

    try {
      setMessage("");
      setError("");

      const response = await fetch(
        `https://the-martha-journal.onrender.com/api/admin/articles/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to delete article");
      }

      setMessage("Article deleted successfully!");
      await fetchArticles();
    } catch (error) {
      setError(error.message || "Failed to delete article.");
    }
  };

  const totalArticles = articles.length;

  const publishedArticles = articles.filter(
    (article) => article.status === "published",
  ).length;

  const draftArticles = articles.filter(
    (article) => article.status === "draft",
  ).length;

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-beige">
      <header className="bg-white border-b border-beige px-6 py-5 flex justify-between items-center">
        <div>
          <p className="text-brown text-xs uppercase tracking-widest">
            The Martha Journal
          </p>

          <h1 className="font-heading text-2xl text-charcoal mt-1">
            Admin Dashboard
          </h1>
        </div>

        <button
          onClick={handleLogout}
          className="cursor-pointer text-sm text-brown border border-brown px-4 py-2 rounded-md hover:bg-brown hover:text-white transition"
        >
          Logout
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h2 className="font-heading text-3xl text-charcoal">
              Welcome Back!
            </h2>

            <p className="text-taupe mt-2">
              Manage your stories and keep your journal updated.
            </p>
          </div>

          <button
            onClick={() => navigate("/admin/articles/new")}
            className=" cursor-pointer bg-brown text-white px-5 py-3 rounded-md hover:opacity-90 transition"
          >
            + Write New Article
          </button>
        </div>

        {/* Dashboard Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg">
            <p className="text-sm text-taupe">Total Articles</p>
            <h3 className="font-heading text-3xl text-charcoal mt-3">
              {loading ? "..." : totalArticles}
            </h3>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <p className="text-sm text-taupe">Published Articles</p>
            <h3 className="font-heading text-3xl text-charcoal mt-3">
              {loading ? "..." : publishedArticles}
            </h3>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <p className="text-sm text-taupe">Draft Articles</p>
            <h3 className="font-heading text-3xl text-charcoal mt-3">
              {loading ? "..." : draftArticles}
            </h3>
          </div>
        </div>

        {/* Feedback Messages */}
        {message && (
          <p className="text-green-700 bg-white p-4 rounded-md mb-6">
            {message}
          </p>
        )}

        {error && (
          <p className="text-red-600 bg-white p-4 rounded-md mb-6">{error}</p>
        )}

        {/* Article Management */}
        <section className="bg-white p-6 rounded-lg">
          <h2 className="font-heading text-2xl text-charcoal mb-6">
            Your Articles
          </h2>

          {loading ? (
            <p className="text-taupe">Loading your articles...</p>
          ) : articles.length === 0 ? (
            <p className="text-taupe">You haven't created any articles yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-beige text-sm text-taupe">
                    <th className="py-4 pr-4">Title</th>
                    <th className="py-4 pr-4">Category</th>
                    <th className="py-4 pr-4">Status</th>
                    <th className="py-4">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {articles.map((article) => (
                    <tr key={article.id} className="border-b border-beige">
                      <td className="py-4 pr-4 text-charcoal">
                        {article.title}
                      </td>

                      <td className="py-4 pr-4 text-taupe">
                        {article.category}
                      </td>

                      <td className="py-4 pr-4">
                        <span
                          className={
                            article.status === "published"
                              ? "text-green-700 text-sm"
                              : "text-orange-600 text-sm"
                          }
                        >
                          {article.status}
                        </span>
                      </td>

                      <td className="py-4">
                        <div className="flex flex-wrap gap-3">
                          {article.status === "draft" && (
                            <button
                              onClick={() => handlePublish(article.id)}
                              className="text-sm text-green-700 underline"
                            >
                              Publish
                            </button>
                          )}

                          <button
                            onClick={() =>
                              navigate(`/admin/articles/${article.id}/edit`, {
                                state: { article },
                              })
                            }
                            className="text-sm text-blue-700 underline"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => handleDelete(article.id)}
                            className="text-sm text-red-600 underline"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
