const session = require('express-session');

app.use(session({
    secret: process.env.SESSION_SECRET || 'default_secret', // Use your session secret from .env
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));
module.exports = {
  authenticator: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next()
    }
    // If user doesn't login,
    // redirect to login page and show warning message
    req.flash('warning_msg', 'Please login first!')
    res.redirect('/users/login')
  }
}


