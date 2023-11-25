const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const authRoute = require("./routes/auth");
require("./passport"); // Assuming passport configuration is in this file

const app = express();

app.use(express.json());

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: ["https://test-gfb.netlify.app", "http://localhost:3000"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// app.use(
//   session({
//     secret: "secretcode",
//     resave: true,
//     saveUninitialized: true,
//     cookie: {
//       sameSite: "none",
//       secure: true,
//       maxAge: 1000 * 60 * 60 * 24 * 7, // One Week
//     },
//   })
// );

app.use("/api/v1/auth", authRoute);

app.get("/", (req, res) => {
  res.send("hello world");
});

const port = process.env.PORT || 4000;

app.listen(port, "0.0.0.0", () => {
  console.log("Server is running!");
});
