
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const adminModel = require("../models/adminModel");

// Admin login
const loginAdmin = async (req, res) => {
  try {
    // Get email and password from the request
    const { email, password } = req.body;

    // Check that both fields were provided
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Find the admin in the database
    const admin = await adminModel.getAdminByEmail(email);

    // Check whether the admin exists
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Compare the entered password with the stored password hash
    const isPasswordValid = await bcrypt.compare(
      password,
      admin.password_hash
    );

    // Reject the login if the password is incorrect
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate an authentication token
    const token = jwt.sign(
      {
        id: admin.id,
        email: admin.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    // Send the successful login response
    return res.status(200).json({
      success: true,
      message: "Admin login successful",
      token,
      admin: {
        id: admin.id,
        username: admin.username,
        email: admin.email,
      },
    });

  } catch (error) {
    console.error("Admin login error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong during login",
    });
  }
};

module.exports = {
  loginAdmin,
};
