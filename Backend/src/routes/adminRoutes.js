
const express = require("express");

const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const articleController = require("../controllers/articleController");
const adminController = require("../controllers/adminController");

// Admin login route
router.post("/login", adminController.loginAdmin);
// Create a new article (protected route)
router.post(
  "/articles", authMiddleware, articleController.createArticle
);

// Update an existing article (protected route)
router.put(
  "/articles/:id",authMiddleware, articleController.updateArticle
);

// Delete an article (protected route)
router.delete(
  "/articles/:id",
  authMiddleware,
  articleController.deleteArticle
);

// Publish an article (protected route)
router.patch(
  "/articles/:id/publish",
  authMiddleware,
  articleController.publishArticle
);

// Get all articles for admin (protected route)
router.get(
  "/articles",
  authMiddleware,
  articleController.getAllAdminArticles
);


module.exports = router;
