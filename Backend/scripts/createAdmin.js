
const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");
const bcrypt = require("bcryptjs");

const pool = require("../src/config/db");
const adminModel = require("../src/models/adminModel");

const createAdminAccount = async () => {
  const rl = readline.createInterface({ input, output });

  try {
    // Check whether an admin account already exists
    const result = await pool.query("SELECT COUNT(*) FROM admins");

    if (Number(result.rows[0].count) > 0) {
      console.log("An admin account already exists.");
      return;
    }

    // Collect admin details
    const username = await rl.question("Enter admin username: ");
    const email = await rl.question("Enter admin email: ");
    const password = await rl.question("Enter admin password: ");

    // Check that all fields are provided
    if (!username.trim() || !email.trim() || !password) {
      console.log("All fields are required.");
      return;
    }

    if (password.length < 8) {
      console.log("Password must be at least 8 characters.");
      return;
    }

    // Hash the password
    const passwordHash = await bcrypt.hash(password, 12);

    // Save the admin account
    const admin = await adminModel.createAdmin(
      username.trim(),
      email.trim().toLowerCase(),
      passwordHash
    );

    console.log("Admin account created successfully!");
    console.log("Username:", admin.username);
    console.log("Email:", admin.email);

  } catch (error) {
    console.error("Failed to create admin:", error.message);

  } finally {
    rl.close();
    await pool.end();
  }
};

createAdminAccount();

