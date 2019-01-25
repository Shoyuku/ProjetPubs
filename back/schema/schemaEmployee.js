const mongoose = require('mongoose');

var employeeSchema = mongoose.Schema({
	emp_id: {
		type: String
	},
	fname: {
        type: String
    },
	minit: {
        type: String
    },
	lname: {
        type: String
    },
	job_id: {
        type: Number
    },
	job_lvl: {
        type: Number
    },
	pub_id: {
        type: Number
    },
	hire_date: {
        type: Date
    },
	Jobs: {
        type: Array
    }
})

module.exports = mongoose.model('Employee', employeeSchema);