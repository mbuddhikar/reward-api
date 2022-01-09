var db = require('../../config/database');

var authenticController = {
    adminLogin: adminLogin
}

function adminLogin(data) {
    var query = 'SELECT user_accounts.*,user_roles.* FROM user_accounts INNER JOIN user_roles ON user_accounts.user_roles_id = user_roles.id WHERE user_accounts.user_name = ' + db.escape(data.user_name);

    return new Promise((resolve, reject) => {
        db.query(query, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = authenticController;