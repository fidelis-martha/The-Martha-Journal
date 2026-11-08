const app = require("./app");
const pool = require("./config/db")
require("dotenv").config();

const PORT = process.env.PORT || 5000;


// Test database connection
pool.connect()
  .then((client) => {
    console.log("PostgreSQL connected successfully!");
    client.release();
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
  });

// start the server 
app.listen(PORT, () => {
  console.log(`the martha journal is running on port ${PORT}`);
});
