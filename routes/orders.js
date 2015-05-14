var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');

router.get('/', restrict, function(req, res, next) {
  if (!req.user) {
    return res.redirect('/');
  }

  // vm stands for View Model
  var vm = {
    title: "Place an order",
    orderId: req.session.orderId,
    firstName: req.user ? req.user.firstName : null
  }
  res.render('orders/index', vm);
});

module.exports = router;
