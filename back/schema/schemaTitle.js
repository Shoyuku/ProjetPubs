const mongoose = require('mongoose');

var titleSchema = mongoose.Schema({
	title_id: {
		type: String
	},
	title: {
        type: String
    },
	type: {
        type: String
    },
	pub_id: {
        type: Number
    },
	price: {
        type: Number
    },
	advance: {
        type: Number
    },
	royalty: {
        type: Number
    },
	ytd_sales: {
        type: Number
    },
	notes: {
        type: String
    },
	pubdate: {
        type: Date
    },
	Titleauthor: {
        type: Array
    },
	Roysched: {
        type: Array
    },
	Sales: {
        type: Array
    }
})

module.exports = mongoose.model('Title', titleSchema);