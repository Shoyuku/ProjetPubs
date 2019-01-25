const Employee = require('../../schema/schemaEmployee.js');

function get_employees(req, res) {
    Employee.find(function(err, employees){
        if(err){
            console.log(err)
        }
        else{
            res.json(employees)
        }
    })
}

//On exporte nos deux fonctions

exports.get_employees = get_employees;