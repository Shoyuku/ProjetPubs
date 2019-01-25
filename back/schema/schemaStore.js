const mongoose = require('mongoose');

var storeSchema = mongoose.Schema({
	stor_id: {
		type: String
	},
	stor_name: {
        type: String
    },
	stor_address: {
        type: String
    },
	city: {
        type: String
    },
	state: {
        type: String
    },
	zip: {
        type: Number
    },
	Discounts: {
        type: Array
    }
})

module.exports = mongoose.model('Store', storeSchema);