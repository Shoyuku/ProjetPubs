const employee = require('./employee/lib.js');

module.exports = function (app) {
    app.get('/get_employees',employee.get_employees);
}