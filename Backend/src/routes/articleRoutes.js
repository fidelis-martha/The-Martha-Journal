
const express = require("express");

const router = express.Router();

const articleController = require("../controllers/articleController");

// Get all published articles
router.get("/", articleController.getAllArticles);

// Get one published article by slug
router.get("/:slug", articleController.getArticle);

module.exports = router;
