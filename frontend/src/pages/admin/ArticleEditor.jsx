
import { useState } from "react";
import {
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";

function ArticleEditor() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  // Check whether we are creating or editing an article
  const existingArticle = location.state?.article;
  const isEditing = Boolean(id);

  // Form data
  const [formData, setFormData] = useState({
    title: existingArticle?.title || "",
    category: existingArticle?.category || "",
    excerpt: existingArticle?.excerpt || "",
    content: existingArticle?.content || "",
    imageUrl:
      existingArticle?.image_url ||
      existingArticle?.imageUrl ||
      "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Create or update article
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        navigate("/admin");
        return;
      }

      const response = await fetch(
        isEditing
          ? `https://the-martha-journal.onrender.com/api/admin/articles/${id}`
          : "https://the-martha-journal.onrender.com/api/admin/articles",
        {
          method: isEditing ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to save article"
        );
      }

      if (isEditing) {
        setSuccess("Article updated successfully!");

        navigate("/admin/dashboard");
      } else {
        setSuccess(
          "Your article has been saved successfully!"
        );

        setFormData({
          title: "",
          category: "",
          excerpt: "",
          content: "",
          imageUrl: "",
        });
      }
    } catch (error) {
      setError(
        error.message || "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  // Handle missing article details during editing
  if (isEditing && !existingArticle) {
    return (
      <div className="min-h-screen bg-beige flex items-center justify-center px-6">
        <div className="bg-white p-8 rounded-lg text-center">
          <p className="text-charcoal mb-4">
            Article details are unavailable. Please open the
            article from your dashboard.
          </p>

          <button
            type="button"
            onClick={() => navigate("/admin/dashboard")}
            className="bg-brown text-white px-6 py-3 rounded-md"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-beige">

      {/* Page Header */}
      <header className="bg-white border-b border-beige px-6 py-5">
        <div className="max-w-4xl mx-auto flex justify-between items-center gap-4">

          <div>
            <p className="  text-brown text-xs uppercase tracking-widest">
              The Martha Journal
            </p>
            <h1 className="font-heading text-2xl text-charcoal mt-1">
              {isEditing
                ? "Edit Article"
                : "Write a New Article"}
            </h1>
          </div>

          <button
            type="button"
            onClick={() => navigate("/admin/dashboard")}
            className="cursor-pointer border border-brown text-brown px-5 py-2.5 rounded-md hover:bg-brown hover:text-white transition text-sm"
          >
            ← Back to Dashboard
          </button>

        </div>
      </header>

      {/* Article Form */}
      <main className="max-w-4xl mx-auto px-6 py-10">

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-6 md:p-8 space-y-6"
        >

          {/* Article Title */}
          <div>
            <label className="block text-sm text-charcoal mb-2">
              Article Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter your article title"
              required
              className="w-full border border-beige rounded-md px-4 py-3 outline-none focus:border-brown"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm text-charcoal mb-2">
              Category
            </label>

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="e.g. Personal Stories, Lifestyle, Reflections"
              required
              className="w-full border border-beige rounded-md px-4 py-3 outline-none focus:border-brown"
            />
          </div>

          {/* Article Excerpt */}
          <div>
            <label className="block text-sm text-charcoal mb-2">
              Article Excerpt
            </label>

            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              placeholder="Write a short introduction to your article..."
              rows="3"
              required
              className="w-full border border-beige rounded-md px-4 py-3 outline-none focus:border-brown"
            />
          </div>

          {/* Featured Image */}
          <div>
            <label className="block text-sm text-charcoal mb-2">
              Featured Image URL
            </label>

            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="Paste your image URL here"
              className="w-full border border-beige rounded-md px-4 py-3 outline-none focus:border-brown"
            />

            <p className="text-xs text-taupe mt-2">
              Paste the link to an image hosted online.
              This field is optional.
            </p>
          </div>

          {/* Article Content */}
          <div>
            <label className="block text-sm text-charcoal mb-2">
              Article Content
            </label>

            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Start writing your story..."
              rows="15"
              required
              className="w-full border border-beige rounded-md px-4 py-3 outline-none focus:border-brown leading-7"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-600 text-sm">
              {error}
            </p>
          )}

          {/* Success Message */}
          {success && (
            <p className="text-green-700 text-sm">
              {success}
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">

            <button
              type="submit"
              disabled={loading}
              className=" cursor-pointer bg-brown text-white px-6 py-3 rounded-md hover:opacity-90 transition disabled:opacity-60"
            >
              {loading
                ? isEditing
                  ? "Updating..."
                  : "Saving..."
                : isEditing
                  ? "Update Article"
                  : "Save Article"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin/dashboard")}
              className="cursor-pointer
               border border-brown text-brown px-6 py-3 rounded-md hover:bg-beige transition"
            >
              Cancel
            </button>

          </div>

        </form>

      </main>
    </div>
  );
}

export default ArticleEditor;
