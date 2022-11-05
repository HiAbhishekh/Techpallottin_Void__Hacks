const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");


const GOOGLE_CLIENT_ID = "576220044050-vav1d7nd5r90jh0hiqk3jp451tk3vrvd.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET ="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"

passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });