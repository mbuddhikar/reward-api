const actionsService = require('../services/actions.service');

function init(router) {
    router.route('/register-officer')
        .post(createUserAccount)
}

function createUserAccount(req, res) {

    let data = req.body;

    actionsService.createUserAccount(data).then((data) => {
        res.status(200).send(data);
    }).catch((err) => {
        console.log(err);
        res.status(400).send(err);
    });
}

module.exports.init = init;



