var db = require('../../config/database');
var dbFunc = require('../../config/db-function');

var actionsController = {
    createUserAccount: createUserAccount
}

function createUserAccount(data) {
    return new Promise((resolve, reject) => {

        var query = "INSERT INTO user_accounts SET ?";

        db.query(query, data, (error, results, fields) => {
            if (!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(results);
            }
        });
    });
}

module.exports = actionsController;