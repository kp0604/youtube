const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
	"274308168128-s39c5s825mfd4pauqbkaj61cogg8caoh.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "your id";
GITHUB_CLIENT_SECRET = "your id";

FACEBOOK_APP_ID = "989322625488978";
FACEBOOK_APP_SECRET = "b98e04564b07b8f22c2ebce9882900d5";

// let url = "http://localhost:4000"
let url = "https://youtube-production-616c.up.railway.app";

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});

passport.use(
	new GoogleStrategy(
		{
			clientID: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
			callbackURL: `${url}/api/v1/auth/google/callback`,
		},
		function (accessToken, refreshToken, profile, done) {
			done(null, profile);
		}
	)
);

passport.use(
	new GithubStrategy(
		{
			clientID: GITHUB_CLIENT_ID,
			clientSecret: GITHUB_CLIENT_SECRET,
			callbackURL: "/api/v1/auth/github/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			done(null, profile);
		}
	)
);

passport.use(
	new FacebookStrategy(
		{
			clientID: FACEBOOK_APP_ID,
			clientSecret: FACEBOOK_APP_SECRET,
			callbackURL: "/api/v1/auth/facebook/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			done(null, profile);
		}
	)
);
