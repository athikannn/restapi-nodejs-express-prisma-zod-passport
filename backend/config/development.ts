import dotenv from "dotenv";
dotenv.config();

export default {
  DB: {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    NAME: process.env.DB_NAME
  },
  WEB:{
    URI: process.env.URI,
    PORT: process.env.WEB_PORT
  },
  SESSION_SECRET: process.env.SESSION_SECRET
};