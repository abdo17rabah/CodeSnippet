const passport = require('passport');

//@controller GET /auth/google
module.exports.googleAuthLogin=passport.authenticate('google',{ scope: ['profile'] })

//@controller GET GET /auth/google/callback
module.exports.googleAuthCallback=(req,res)=>{
    res.redirect('/dashboard');
}

//@controller GET /auth/logout
module.exports.googleAuthLogout=(req,res)=>{
    req.logout();
    res.redirect('/');
  }
