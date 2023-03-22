const express = require("express");
const Users = require("../models/users");
const adminRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

adminRouter.post("/register", async (request, response) => {
  const { email, password } = request.body;
  if (email && password) {
    const oldUser = await Users.findOne({ email });
    if (oldUser !== null) {
      return response.json({ error: "Already registered" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      Users.create({ email: email, password: hashedPassword })
        .then((data) => {
          response.status(201).json({
            message: "Хэрэглэгч амжилттай үүслээ.",
            email: data.email,
          });
          return;
        })
        .catch((error) => {
          response.status(500).json({
            success: false,
            error,
          });
        });
    }
  } else {
    return response.json({ error: "Input field is empty" });
  }
});
adminRouter.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;
    if (!(email && password)) {
      return response.status(400).json({
        message: "Утгуудыг бүрэн оруулна уу",
      });
    }
    const user = await Users.findOne({ email: email });
    const isMatch = await bcrypt.compare(password, user?.password);
    if (user && isMatch) {
      const jwtBody = { user_id: user._id, email: email };
      const token = jwt.sign(jwtBody, "DontMessWithThis", { expiresIn: "24h" });
      return response.status(200).json({
        success: true,
        token: token,
      });
    }
    response.status(400).json({
      status: "Нууц үг нэр хоорондоо таарахгүй байна.",
    });
  } catch (error) {
    response.status(500).json({
      data: "Алдаа гарлаа",
      error: error,
    });
  }
});
module.exports = adminRouter;
