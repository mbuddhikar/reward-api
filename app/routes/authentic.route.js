const authenticService = require('../services/authentic.service');

function init(router) {
  router.route('/admin-login')
    .post(adminLogin);
}

function adminLogin(req, res) {
  var logData = req.body;

  authenticService.adminLogin(logData).then((data) => {
    if (data.success) {
      res.status(200).send(data);
    } else {
      res.status(401).send(data);
    }
  }).catch((err) => {
    console.log(err)
    res.status(400).send(err);
  });
}

module.exports.init = init;



