const bcrypt = require("bcryptjs/dist/bcrypt.js");
const Auth = require("../models/auth.js");
const jwt = require("jsonwebtoken");

//! Register
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await Auth.findOne({ email });

    if (user) {
      return res
        .status(500)
        .json({ message: "Bu email hesabı zaten bulunmakta!!" });
    }

    if (password.length < 6) {
      return res
        .status(500)
        .json({ message: "Parolanız 6 karakterden fazla olmali!!" });
    }

    const passwordHash = await bcrypt.hash(password, 12); // salt ? adds an extra layer

    const newUser = await Auth.create({
      username,
      email,
      password: passwordHash,
    });

    const userToken = await jwt.sign(
      { id: newUser.id },
      process.env.SECRET_TOKEN,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      status: "OK",
      newUser,
      userToken,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//!Login

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Auth.findOne({ email });

    if (!user) {
      return res.status(500).json({ message: "Kullanıcı bulunamadi" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(500).json({ message: "Parola not true" });
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN, {
      expiresIn: "1h",
    });

    res.status(200).json({
      status: "OK",
      user,
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login };
