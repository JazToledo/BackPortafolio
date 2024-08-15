import { config } from "dotenv";
config();

export const uri = process.env.DB_MONGODB_URI;
export const allowed_origins = process.env.ALLOWED_ORIGINS;
export const allowed_origin = process.env.ALLOWED_ORIGIN;
export const port = process.env.PORT;
export const secret = process.env.SECRET;
export const cloud_name = process.env.CLOUD_NAME;
export const api_key = process.env.API_KEY;
export const api_secret = process.env.API_SECRET;
export const domain = process.env.DOMAIN;
export const production = process.env.PRODUCTION;
