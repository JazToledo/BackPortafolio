import User from "../models/user.model.js";
import { createAccessToken } from "../libs/jwt.js";
import bcrypt from "bcrypt";

export const signupUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const usernameFound = await User.findOne({ username });
    const emailFound = await User.findOne({ email });

    if (usernameFound)
      return res.status(400).json(["El usuario ya esta en uso"]);
    if (emailFound) return res.status(400).json(["El email ya esta en uso"]);

    const passwordHashed = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: passwordHashed,
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({
      id: userSaved._id,
      user: userSaved.username,
    });

    res
      .status(201)
      .json({ token: token, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const authenticateUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json(["Credenciales inválidas"]);
    }

    const token = await createAccessToken({
      id: user._id,
    });

    res.status(200).json({ token: token, message: "Login successfully" });
  } catch (error) {
    res.status(500).json([error.message]);
  }
};

export const logout = (req, res) => {
  req.cookie("token", "", {
    expires: new Date(0),
  });

  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  try {
    const userFound = await User.findById(req.user);

    if (!userFound)
      return res.status(404).json({ message: "Usuario no encontrado" });

    return res.status(200).json({
      id: userFound._id,
      email: userFound.email,
      name: userFound.name,
      firstName: userFound.firstName,
      avatar: userFound.avatar,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export const verifyToken = async (req, res) => {
  const userFound = await User.findById(req.user);
  if (!userFound) return res.status(401).json({ message: "No autorizado" });

  return res.json({
    id: userFound._id,
    name: userFound.name,
    avatar: userFound.avatar,
    email: userFound.email,
  });
};
