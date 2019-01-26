const mongoose = require('mongoose');

var authorSchema = mongoose.Schema({
	au_id: {
		type: String
	},
	au_lname: {
        type: String
    },
	au_fname: {
        type: String
    },
	phone: {
        type: String
    },
	address: {
        type: String
    },
	city: {
        type: String
    },
	state: {
        type: String
    },
	zip: {
        type: String
    },
	contract: {
        type: Number
    }
})

module.exports = mongoose.model('Author', authorSchema);