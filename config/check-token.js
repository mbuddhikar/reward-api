const jwt = require('jsonwebtoken');
var store = require('localStorage');
var constants = require('../config/constants');

module.exports = function checkToken(req, res, next) {
  var appToken = req.headers['app-token'];

  if (constants.appToken == appToken) {
    next();
  } else {
    res.json({
      "status": 401,
      "message": "NO APP TOKEN PROVIDED",
      "error": "Unauthorized"
    });
  }

}