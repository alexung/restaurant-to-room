var express = require('express');
var router = express.Router();
var passport = require('passport');
var config = require('../config');
var userService = require('../services/user-service');
// Routes here default to begin with /users
// GET /users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET /users/create
router.get('/create', function(req, res, next) {
  // vm stands for view model, can put it here instead of in the res.render()
  var vm = {
    title: "Create an account"
  };
  res.render('users/create', vm);
});

// POST /users/create
router.post('/create', function(req, res, next) {
  userService.addUser(req.body, function(err) {
    if (err) {
      console.log(err);
      var vm = {
        title: "Create an account",
        input: req.body,
        error: err
      };
    delete vm.input.password;
    return res.render('users/create', vm);
  }
    req.login(req.body, function(err){
      res.redirect('/orders');
    });
  });
});

//passport.authenticate will attempt to check a username property
// and password property and request.body, and will return a 401
// unauthorized status if it fails
router.post('/login',
  function(req, res, next) {
    req.session.orderId = 12345;
    if (req.body.rememberMe) {
      req.session.cookie.maxAge = config.cookieMaxAge;
    }
    next(); // if we don't have next(), it will get stuck in this if statement
  },
  passport.authenticate('local', {
  failureRedirect: '/',
  successRedirect: '/orders',
  failureFlash: 'Invalid credentials'
}));

router.get('/logout', function(req, res, next) {
  req.logout();
  // will destroy the session so user doesn't remain logged in
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
