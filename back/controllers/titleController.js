const title = require('./title/lib.js');

module.exports = function (app) {
    app.get('/get_titles',title.get_titles);
    app.get('/get_book_per_author',title.get_book_per_author);
    app.get('/get_book_sales_per_author',title.get_book_sales_per_author);
    app.get('/get_sales_per_book',title.get_sales_per_book);
    app.get('/get_sales_per_publisher', title.get_sales_per_publisher);
    app.get('/get_range_per_author', title.get_range_per_author);
    app.get('/get_list_employees', title.get_list_employees)
}