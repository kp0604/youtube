const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const app = express();

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: ["https://test-gfb.netlify.app"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/api/v1/auth", authRoute);

app.get('/', (req, res) => {
  res.send('hello world')
})

const port = process.env.PORT || 4000;

app.listen(port,"0.0.0.0", () => {
  console.log("Server is running!");
});
