import express from "express";
import config from "config";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import API from "./routes";
import usePassportLocal from "./utils/passportLocal";
const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: config.get("SESSION_SECRET"),
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
usePassportLocal(passport);
app.use("/api", API);

app.listen(config.get("WEB.PORT"), () => {
  console.log(`listening port: ${config.get("WEB.URI")}:${config.get("WEB.PORT")}`);
});
