import dotenv from "dotenv";
dotenv.config();

export default {
  DATABASE_URL: process.env.DATABASE_URL,
  WEB:{
    URI: process.env.URI,
    PORT: process.env.WEB_PORT
  },
  SESSION_SECRET: process.env.SESSION_SECRET
};