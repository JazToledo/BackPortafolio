import express, { json, urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import router from "./routes/auth.routes.js";
import { allowed_origin, production, secret } from "./config.js";

const app = express();
app.disable("x-powered-by");

app.use(
  cors({
    origin: allowed_origin,
    credentials: true,
  })
);
app.options("*", cors());

app.use(cookieParser());

app.use(morgan("dev"));
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/api", router);

export default app;
