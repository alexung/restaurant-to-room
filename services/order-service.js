// would be filled in if we were actually using api
var ordrx = require('ordrin-api');
var config = require('../config');
var Order = require('../models/order').Order;

var api = new orderx.APIs(config.ordrxKey, ordrx.TEST);
//these are all mongoose functions
//storing orders users create with SPA
exports.createOrder = function(user, food, next) {
  var order = new Order({
    user: user,
    food: food
  });
  order.save(function(err, saveOrder){
    if (!err) {
      return next(null, savedOrder._id);
    }
    next(err);
  });
}

