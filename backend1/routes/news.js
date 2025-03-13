const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

const NEWS_API_KEY = process.env.NEWS_API_KEY;

// Route to fetch news
router.get("/fetch-news", async (req, res) => {
  try {
    const { category } = req.query; // Get category from request query
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${NEWS_API_KEY}`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

module.exports = router;
