const pool = require("../config/db");

// Find an admin by email
const getAdminByEmail = async (email) => {
  const result = await pool.query(
    "SELECT * FROM admins WHERE email = $1",
    [email]
  );

  return result.rows[0];
};

// Create a new admin
const createAdmin = async (username, email, passwordHash) => {
  const result = await pool.query(
    `INSERT INTO admins (username, email, password_hash)
     VALUES ($1, $2, $3)
     RETURNING id, username, email, created_at`,
    [username, email, passwordHash]
  );

  return result.rows[0];
};


module.exports = {
  getAdminByEmail,
  createAdmin
};