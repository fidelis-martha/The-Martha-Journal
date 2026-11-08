
const articleModel = require("../models/articleModel");
const pool = require("../config/db");

// Get all published articles
const getAllArticles = async (req, res) => {
  try {
    const articles = await articleModel.getAllPublishedArticles();

    res.status(200).json({
      success: true,
      message: "Articles retrieved successfully",
      data: articles,
    });

  } catch (error) {
    console.error("Error fetching articles:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to retrieve articles",
    });
  }
};

// Get a single published article
const getArticle = async (req, res) => {
  try {
    const { slug } = req.params;

    const article = await articleModel.getArticleBySlug(slug);

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
      });
    }

    res.status(200).json({
      success: true,
      data: article,
    });

  } catch (error) {
    console.error("Error fetching article:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to retrieve article",
    });
  }
};

// Get all articles for admin
const getAllAdminArticles = async (req, res) => {
  try {
    // Retrieve all articles from the database
    const articles = await articleModel.getAllAdminArticles();

    return res.status(200).json({
      success: true,
      message: "All articles retrieved successfully",
      data: articles,
    });

  } catch (error) {
    console.error("Error fetching admin articles:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to retrieve articles",
    });
  }
};


// Create a new article
const createArticle = async (req, res) => {
  try {
    // Get article details from the request body
    const { title, category, excerpt, content, imageUrl } = req.body;

    // Check required fields
    if (!title || !category || !content) {
      return res.status(400).json({
        success: false,
        message: "Title, category and content are required",
      });
    }

    // Create a simple slug from the title
    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    // Save the article through the model
    const article = await articleModel.createArticle(
      title,
      slug,
      category,
      excerpt || null,
      content,
      imageUrl || null
    );

    // Send success response
    return res.status(201).json({
      success: true,
      message: "Article created successfully",
      data: article,
    });

  } catch (error) {
    console.error("Error creating article:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to create article",
    });
  }
};

// Update an existing article
const updateArticle = async (req, res) => {
  try {
    // Get the article ID from the URL
    const { id } = req.params;

    // Get updated details from the request body
    const { title, category, excerpt, content, imageUrl } = req.body;

    // Check required fields
    if (!title || !category || !content) {
      return res.status(400).json({
        success: false,
        message: "Title, category and content are required",
      });
    }

    // Update the article in the database
    const article = await articleModel.updateArticle(
      id,
      title,
      category,
      excerpt || null,
      content,
      imageUrl || null
    );

    // Check whether the article exists
    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Article updated successfully",
      data: article,
    });

  } catch (error) {
    console.error("Error updating article:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to update article",
    });
  }
};

// Delete an article
// Delete an article
const deleteArticle = async (req, res) => {
  try {
    // Get the article ID from the URL
    const { id } = req.params;

    // Delete the article from the database
    const article = await articleModel.deleteArticle(id);

    // Check whether the article exists
    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Article deleted successfully",
      data: article,
    });

  } catch (error) {
    console.error("Error deleting article:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to delete article",
    });
  }
};

// Publish an article
const publishArticle = async (req, res) => {
  try {
    // Get the article ID from the URL
    const { id } = req.params;

    // Publish the article
    const article = await articleModel.publishArticle(id);

    // Check whether the article exists
    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Article published successfully",
      data: article,
    });

  } catch (error) {
    console.error("Error publishing article:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to publish article",
    });
  }
};
module.exports = {
  getAllArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
  publishArticle,
  getAllAdminArticles,
};
