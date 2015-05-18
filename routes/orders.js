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

// router.get('/api/restaurant-details/:restId') {
//   orderService.getRestaurantDetails(req.params.restId, function())
// }
// if we want an optional parameter in this url,
// we'd add a ? after it

router.post('/api/create-order', restrict, function(req, res, next) {
  orderService.createOrder(req.user._doc, req.body, function(err, orderId){
    if (err) {
      return res.status(500).json({error: 'Failed to create order'});
    }
    // if NO error...
    ////order_id is written with that syntax bc its mongoId
    req.session.order_id = orderId;
    res.json({success: true});
  });
});

module.exports = router;
