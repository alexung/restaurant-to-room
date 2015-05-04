var express = require('express');
var router = express.Router();
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
  res.redirect('/orders');
  });
});

module.exports = router;
