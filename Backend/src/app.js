const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const articleRoutes = require("./routes/articleRoutes");
const adminRoutes = require("./routes/adminRoutes");

// middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/articles", articleRoutes);
app.use("/api/admin", adminRoutes);

// test routes 
app.get("/",(req, res)=>{
    res.send("Hello the martha journal API");
})

module.exports=app;