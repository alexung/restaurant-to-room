var config = {};

config.mongoUri = 'mongodb://localhost:27017/rtr'
config.cookieMaxAge = 30 * 24 * 3600 * 1000;
config.ordrxKey = 'a5G5UZ00stzkkosb0oy8KHyXFWrO8LHJK32y5jVJ';
config.address = {
  addr: '288 Coleridge St',
  city: 'San Francisco',
  zip: '94100',
  state: 'CA'
};
config.phone = '415-555-1234';

module.exports = config;
