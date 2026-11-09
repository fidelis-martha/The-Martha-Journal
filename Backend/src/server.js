
require("dotenv").config();

const app = require("./app");
const pool = require("./config/db");

const PORT = process.env.PORT || 5000;

// Test database connection
pool.connect()
  .then((client) => {
    console.log("PostgreSQL connected successfully!");
    client.release();

    // Start the server after database connection succeeds
    app.listen(PORT, () => {
      console.log(`The Martha Journal server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    console.error("Error code:", error.code);
    console.error("Error detail:", error.detail);
    process.exit(1);
  });
