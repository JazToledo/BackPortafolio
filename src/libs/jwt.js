import jwt from "jsonwebtoken";
import { secret } from "../config.js";

export const createAccessToken = async (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, { expiresIn: "1d" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
}
export default { createAccessToken };
