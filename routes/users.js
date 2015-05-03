var express = require('express');
var router = express.Router();

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
  }
  res.render('users/create', vm);
});

module.exports = router;
