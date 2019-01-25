const title = require('./title/lib.js');

module.exports = function (app) {
    app.get('/get_titles',title.get_titles);
}