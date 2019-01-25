const publisher = require('./publisher/lib.js');

module.exports = function (app) {
    app.get('/get_publishers',publisher.get_publishers);
}