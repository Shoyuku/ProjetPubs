const mongoose = require('mongoose');

var publisherSchema = mongoose.Schema({
	pub_id: {
		type: String
	},
	pub_name: {
        type: String
    },
	city: {
        type: String
    },
	state: {
        type: String
    },
	country: {
        type: String
    },
	Pub_info: {
        type: Array
    }
})

module.exports = mongoose.model('Publisher', publisherSchema);