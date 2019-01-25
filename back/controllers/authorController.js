const author = require('./author/lib.js');

module.exports = function (app) {
    app.get('/get_authors',author.get_authors);
}