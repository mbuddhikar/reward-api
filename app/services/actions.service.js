var actionsController = require("../controllers/actions.controller");

var actionsService = {
    createUserAccount: createUserAccount
}

function createUserAccount(inData) {
    return new Promise((resolve, reject) => {

        actionsController.createUserAccount(inData).then((data) => {
            if (data.length == 0) {
                resolve({ "success": false, "message": "Something went wrong" });
            } else {
                resolve({ "success": true, "message": "Designation added successfully" });
            }
        }).catch((err) => {
            reject(err);
        })

    })
}

module.exports = actionsService;