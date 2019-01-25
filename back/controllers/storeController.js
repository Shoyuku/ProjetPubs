const store = require('./store/lib.js');

module.exports = function (app) {
    app.get('/get_stores',store.get_stores);
}