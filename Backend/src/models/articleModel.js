
const pool = require("../config/db");

// Get all published articles
const getAllPublishedArticles = async () => {
  const result = await pool.query(
    `SELECT * FROM articles
     WHERE status = 'published'
     ORDER BY published_at DESC`
  );

  return result.rows;
};

// Get one published article by its slug
const getArticleBySlug = async (slug) => {
  const result = await pool.query(
    `SELECT * FROM articles
     WHERE slug = $1
     AND status = 'published'`,
    [slug]
  );

  return result.rows[0];
};

// Create a new article
const createArticle = async (
  title,
  slug,
  category,
  excerpt,
  content,
  imageUrl
) => {
  const result = await pool.query(
    `INSERT INTO articles
    (title, slug, category, excerpt, content, image_url)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *`,
    [title, slug, category, excerpt, content, imageUrl]
  );

  return result.rows[0];
};


// Update an existing article
const updateArticle = async (
  id,
  title,
  category,
  excerpt,
  content,
  imageUrl
) => {
  const result = await pool.query(
    `UPDATE articles
     SET title = $1,
         category = $2,
         excerpt = $3,
         content = $4,
         image_url = $5,
         updated_at = CURRENT_TIMESTAMP
     WHERE id = $6
     RETURNING *`,
    [title, category, excerpt, content, imageUrl, id]
  );

  return result.rows[0];
};

// Delete an article
const deleteArticle = async (id) => {
  const result = await pool.query(
    `DELETE FROM articles
     WHERE id = $1
     RETURNING *`,
    [id]
  );

  return result.rows[0];
};

// Publish an article
const publishArticle = async (id) => {
  const result = await pool.query(
    `UPDATE articles
     SET status = 'published',
         published_at = CURRENT_TIMESTAMP,
         updated_at = CURRENT_TIMESTAMP
     WHERE id = $1
     RETURNING *`,
    [id]
  );

  return result.rows[0];
};

// Get all articles for admin
const getAllAdminArticles = async () => {
  const result = await pool.query(
    `SELECT * FROM articles
     ORDER BY created_at DESC`
  );

  return result.rows;
};
module.exports = {
  getAllPublishedArticles,
  getArticleBySlug,
  createArticle,
  updateArticle,
  deleteArticle,
  publishArticle,
  getAllAdminArticles,
};
