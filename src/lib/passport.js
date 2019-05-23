const passport = require('passport')
const PassportLocal = require('passport-local').Strategy    

passport.use('local-signup', new PassportLocal({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},  async (req, username, password, done) => {
    console.log(req.body);
}))

//passport.serializeUser((usr, done) => {

//})