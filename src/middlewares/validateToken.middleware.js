import jwt from "jsonwebtoken";
import { secret } from "../config.js";

export function validateToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Acceso denegado" });

  try {
    jwt.verify(token, secret, (err, user) => {
      if (err) return res.status(403).json({ message: "Token no válido" });

      req.user = user.id;
    });

    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
}
