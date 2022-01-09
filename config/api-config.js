var express = require("express");
var app = express();
var path = require('path');
var dbfunc = require('./db-function');
var bodyParser = require('body-parser');
var checkToken = require('./check-token');
var cors = require('cors');

//API config
var constants = require('../config/constants');

//Routes
var AuthenticRoute = require('../app/routes/authentic.route');
var ActionsRoute = require('../app/routes/actions.route');

dbfunc.connectionCheck.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});

app.use(cors());
app.use(bodyParser.json({ limit: '100mb', extended: true }));

var router = express.Router();

app.use('/api/' + constants.version, router);
router.use(checkToken);

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// index route
app.get('/NodeApp', (req, res) => {
  res.send('Invalid endpoint');
});

var ApiConfig = {
  app: app
}

//initialize routes
AuthenticRoute.init(router);
ActionsRoute.init(router);

module.exports = ApiConfig;
